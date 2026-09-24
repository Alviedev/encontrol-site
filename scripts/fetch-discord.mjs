// Saves the Discord server's approximate member and online counts (numbers only,
// no member info) to src/data/discord.json, using the public invite from
// src/data/socials.ts. If Discord can't be reached, the existing file is kept.
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = new URL("../src/data/socials.ts", import.meta.url);
const OUT = new URL("../src/data/discord.json", import.meta.url);

async function main() {
  const code = readFileSync(SOURCE, "utf8").match(
    /discord\.com\/invite\/(\w+)/,
  )?.[1];
  if (!code) throw new Error("no invite link found in socials.ts");

  const res = await fetch(
    `https://discord.com/api/v10/invites/${code}?with_counts=true`,
    { signal: AbortSignal.timeout(15000) },
  );
  if (!res.ok) throw new Error(`Discord responded ${res.status}`);
  const invite = await res.json();

  const counts = {
    members: invite.approximate_member_count,
    online: invite.approximate_presence_count,
  };
  writeFileSync(OUT, JSON.stringify(counts, null, 2) + "\n");
  console.log(`discord: ${counts.members} members, ${counts.online} online`);
}

main().catch((err) => {
  console.warn(
    `discord: couldn't update, keeping existing discord.json (${err.message})`,
  );
});
