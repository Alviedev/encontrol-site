import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";

const DATA = {
  games: "src/data/games.ts",
  developers: "src/data/developers.ts",
};

function git(...args: string[]): string {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

function slugs(source: string): string[] {
  return [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

// Dev only: /__recent lists the game and developer slugs added by the
// uncommitted changes, or by the last commit when there are none
function recentAdditions(): Plugin {
  return {
    name: "recent-additions",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__recent", (_req, res) => {
        const files = Object.values(DATA);
        const dirty = git("status", "--porcelain", "--", ...files).trim() !== "";
        const base = dirty ? "HEAD" : "HEAD~1";
        const added = Object.fromEntries(
          Object.entries(DATA).map(([key, file]) => {
            let before = "";
            try {
              before = git("show", `${base}:${file}`);
            } catch {
              // file didn't exist yet, so everything in it is new
            }
            const old = new Set(slugs(before));
            return [key, slugs(readFileSync(file, "utf8")).filter((s) => !old.has(s))];
          }),
        );
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            source: dirty
              ? "uncommitted changes"
              : git("log", "-1", "--format=%h %s").trim(),
            ...added,
          }),
        );
      });
    },
  };
}

export default defineConfig({
  plugins: [recentAdditions()],
});
