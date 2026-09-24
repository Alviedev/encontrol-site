import counts from "./discord.json";

export const DISCORD_INVITE = "https://discord.com/invite/Cad9RaE4s6";

// Approximate counts from Discord's public invite info, updated by
// scripts/fetch-discord.mjs on every dev/build. Only the two numbers are stored.
export const discordCounts = counts as { members?: number; online?: number };

export const INSTAGRAM_URL = "https://www.instagram.com/encontrol.mty/";

// Edit by hand: Instagram has no simple public way to read follower counts
export const INSTAGRAM_FOLLOWERS = "+500";
