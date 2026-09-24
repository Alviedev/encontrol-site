// Pulls the latest images and release dates for every game with a Steam link
// into src/data/steam.json. Runs before `dev` and `build`; if Steam can't be
// reached, the existing steam.json is kept so the site still builds.
import { readFileSync, writeFileSync } from "node:fs";

const GAMES = new URL("../src/data/games.ts", import.meta.url);
const OUT = new URL("../src/data/steam.json", import.meta.url);
const CDN = "https://shared.akamai.steamstatic.com/store_item_assets/";

const appIds = [
  ...new Set(
    [
      ...readFileSync(GAMES, "utf8").matchAll(
        /store\.steampowered\.com\/app\/(\d+)/g,
      ),
    ].map((m) => Number(m[1])),
  ),
];

// Steam dates are timestamps; take the calendar day in Monterrey
function localDay(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString("sv-SE", {
    timeZone: "America/Monterrey",
  });
}

// Only return a release when Steam gives a real date; "TBA"/"Coming soon" keep the manual value
function toRelease(release = {}) {
  const ts = release.steam_release_date;
  if (!ts) return undefined;
  const day = localDay(ts);
  switch (release.coming_soon_display ?? "date_full") {
    case "date_full":
      return { type: "date", value: day };
    case "date_quarter":
      return {
        type: "quarter",
        value: `Q${Math.ceil(Number(day.slice(5, 7)) / 3)} ${day.slice(0, 4)}`,
      };
    case "date_year":
      return { type: "year", value: Number(day.slice(0, 4)) };
    default:
      return undefined;
  }
}

async function main() {
  const input = {
    ids: appIds.map((appid) => ({ appid })),
    context: { language: "english", country_code: "US" },
    data_request: { include_assets: true, include_release: true },
  };
  const url =
    "https://api.steampowered.com/IStoreBrowseService/GetItems/v1/?input_json=" +
    encodeURIComponent(JSON.stringify(input));
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`Steam responded ${res.status}`);
  const items = (await res.json()).response?.store_items ?? [];

  const data = {};
  for (const item of items) {
    const assets = item.assets;
    if (!item.success || !assets) continue;
    const asset = (file) =>
      file && CDN + assets.asset_url_format.replace("${FILENAME}", file);
    data[item.appid] = {
      capsuleUrl: asset(assets.main_capsule_2x ?? assets.main_capsule),
      posterUrl: asset(assets.library_capsule_2x ?? assets.library_capsule),
      release: toRelease(item.release),
    };
  }

  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(
    `steam: updated ${Object.keys(data).length}/${appIds.length} games`,
  );
}

main().catch((err) => {
  console.warn(
    `steam: couldn't update, keeping existing steam.json (${err.message})`,
  );
});
