// Pulls the full-size cover, tab icon and screenshots for every game with an itch.io link
// into src/data/itch.json. Runs before `dev` and `build`; if itch can't be
// reached, the existing itch.json is kept so the site still builds.
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const GAMES = new URL("../src/data/games.ts", import.meta.url);
const OUT = new URL("../src/data/itch.json", import.meta.url);
const MAX_SCREENSHOTS = 3;

const urls = [
  ...new Set(
    [
      ...readFileSync(GAMES, "utf8").matchAll(
        /itch: "(https:\/\/[\w-]+\.itch\.io\/[^"]+)"/g,
      ),
    ].map((m) => m[1]),
  ),
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// itch rate limits bursts (429), so wait and try again a couple of times
async function get(url, retries = 3) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    signal: AbortSignal.timeout(15000),
  });
  if (res.status === 429 && retries > 0) {
    await sleep(3000);
    return get(url, retries - 1);
  }
  if (!res.ok) throw new Error(`itch responded ${res.status} for ${url}`);
  return res.text();
}

// The page's og:image is the cover at full size; data.json only has a cropped thumbnail
async function getGame(url) {
  const [page, data] = await Promise.all([get(url), get(`${url}/data.json`)]);
  const coverUrl = page.match(
    /<meta property="og:image" content="([^"]+)"/,
  )?.[1];
  // The tab icon is a 32x32 crop of the cover (itch.io's own logo when there's no cover)
  const iconUrl = page
    .match(/<link[^>]*rel="icon"[^>]*>/)?.[0]
    .match(/href="(https:\/\/img\.itch\.zone\/[^"]+)"/)?.[1];
  const screenshots = (JSON.parse(data).screenshots ?? []).slice(
    0,
    MAX_SCREENSHOTS,
  );
  return { coverUrl, iconUrl, screenshots };
}

async function main() {
  const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
  const data = {};
  let updated = 0;
  // One game at a time so itch doesn't rate limit us
  for (const url of urls) {
    try {
      data[url] = await getGame(url);
      updated++;
    } catch {
      if (previous[url]) data[url] = previous[url];
    }
  }
  if (updated === 0) throw new Error("no games could be fetched");
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(`itch: updated ${updated}/${urls.length} games`);
}

main().catch((err) => {
  console.warn(
    `itch: couldn't update, keeping existing itch.json (${err.message})`,
  );
});
