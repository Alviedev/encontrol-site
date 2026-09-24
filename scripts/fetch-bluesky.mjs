// Pulls the current Bluesky profile picture for every developer linked to Bluesky
// into src/data/bluesky.json. Runs with fetch-steam; if Bluesky can't be reached,
// the existing bluesky.json is kept so the site still builds.
import { readFileSync, writeFileSync } from "node:fs";

const DEVS = new URL("../src/data/developers.ts", import.meta.url);
const OUT = new URL("../src/data/bluesky.json", import.meta.url);

const handles = [
  ...new Set(
    [
      ...readFileSync(DEVS, "utf8").matchAll(/bsky\.app\/profile\/([^"/?]+)/g),
    ].map((m) => m[1].toLowerCase()),
  ),
];

async function main() {
  const avatars = {};
  // getProfiles accepts up to 25 accounts per request
  for (let i = 0; i < handles.length; i += 25) {
    const query = handles
      .slice(i, i + 25)
      .map((h) => `actors=${encodeURIComponent(h)}`)
      .join("&");
    const res = await fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfiles?${query}`,
      { signal: AbortSignal.timeout(15000) },
    );
    if (!res.ok) throw new Error(`Bluesky responded ${res.status}`);
    for (const profile of (await res.json()).profiles) {
      if (profile.avatar)
        avatars[profile.handle.toLowerCase()] = profile.avatar;
    }
  }

  writeFileSync(OUT, JSON.stringify(avatars, null, 2) + "\n");
  console.log(
    `bluesky: updated ${Object.keys(avatars).length}/${handles.length} avatars`,
  );
}

main().catch((err) => {
  console.warn(
    `bluesky: couldn't update, keeping existing bluesky.json (${err.message})`,
  );
});
