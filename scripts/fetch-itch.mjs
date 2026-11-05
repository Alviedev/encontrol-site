// Pulls the full-size cover, tab icon and screenshots for every game with an itch.io link
// into src/data/itch.json. Runs before `dev` and `build`, but only fetches games that
// aren't in itch.json yet, so itch isn't hit on every run; `npm run refresh-itch`
// re-fetches everything. If itch can't be reached, the existing data is kept.
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
  if (!res.ok)
    throw Object.assign(new Error(`itch responded ${res.status} for ${url}`), {
      status: res.status,
    });
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
  const refreshAll = process.argv.includes("--all");
  const todo = refreshAll ? urls : urls.filter((url) => !(url in previous));
  // Keep known games; drop ones no longer in games.ts
  const data = Object.fromEntries(
    urls.filter((url) => url in previous).map((url) => [url, previous[url]]),
  );
  let updated = 0;
  // One game at a time, with a pause, so itch doesn't rate limit us
  for (const url of todo) {
    try {
      data[url] = await getGame(url);
      updated++;
    } catch (err) {
      // A removed page stays recorded (empty) so it isn't retried on every run
      if (err.status === 404) data[url] = {};
    }
    await sleep(1000);
  }
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(
    todo.length === 0
      ? "itch: nothing new to fetch"
      : `itch: fetched ${updated}/${todo.length} games`,
  );
}

main().catch((err) => {
  console.warn(
    `itch: couldn't update, keeping existing itch.json (${err.message})`,
  );
});
