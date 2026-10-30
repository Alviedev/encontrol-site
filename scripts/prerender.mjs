// Saves every page as finished HTML after `vite build`, so search engines and
// link previews (Discord, WhatsApp, Bluesky...) see each page's content and
// metadata without running JavaScript. The app still takes over in the browser.
//
// Pages are found by following links from "/" and "/en", the same way a
// crawler would. Each one is saved as dist/<path>.html, which Cloudflare
// serves at /<path>.
import http from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const DIST = path.resolve("dist");
const START = ["/", "/en"];

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

// Serves dist like the real host: files as-is, any other path gets the app
const template = await readFile(path.join(DIST, "index.html"));
const server = http.createServer(async (req, res) => {
  const file = path.join(DIST, decodeURIComponent(new URL(req.url, "http://x").pathname));
  try {
    if (file.startsWith(DIST + path.sep) && (await stat(file)).isFile()) {
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] ?? "application/octet-stream" });
      return res.end(await readFile(file));
    }
  } catch {
    // not a file; fall through to the app
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(template);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
// Spanish browser with nothing saved, so "/" doesn't redirect to English
const page = await browser.newPage({ locale: "es-MX" });

const queue = [...START];
const seen = new Set(queue);
const rendered = new Map();
const hidden = [];

try {
  while (queue.length) {
    const route = queue.shift();
    await page.goto(origin + route, { waitUntil: "domcontentloaded" });
    if (new URL(page.url()).pathname !== route)
      throw new Error(`${route} redirected to ${page.url()}`);
    // Wait for the page's metadata, then for the page transition to settle
    await page.waitForFunction(() => document.querySelector('link[rel="canonical"]'));
    await page.waitForTimeout(400);

    rendered.set(route, "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML)));
    if (await page.$('meta[name="robots"][content="noindex"]')) hidden.push(route);

    for (const href of await page.$$eval("a[href]", (links) => links.map((a) => a.href))) {
      const url = new URL(href);
      const next = url.pathname.replace(/\/$/, "") || "/";
      if (url.origin !== origin || path.extname(next) || seen.has(next)) continue;
      seen.add(next);
      queue.push(next);
    }
  }
} finally {
  await browser.close();
  server.close();
}

for (const [route, html] of rendered) {
  const file = path.join(DIST, route === "/" ? "index.html" : route.slice(1) + ".html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

console.log(`Pre-rendered ${rendered.size} pages.`);
if (hidden.length)
  console.warn(`These are linked but marked noindex (not found?):\n  ${hidden.join("\n  ")}`);
