// Per-page <head> metadata: title, description, share image, canonical URL and
// links to the page in the other language. scripts/prerender.mjs saves the
// result into each page's HTML, so crawlers and link previews see it too.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { type Lang, lang, locale, localizedPath, t } from "./i18n";

const ORIGIN = "https://encontrol.dev";

// Used by the home page, and by any page that leaves something out
const site = {
  title: {
    es: "EnControl - Comunidad abierta de desarrollo de Videojuegos en Monterrey",
    en: "EnControl - Open game developer community based in Monterrey",
  },
  description: {
    es: "La comunidad abierta de desarrollo de videojuegos mas grande de Monterrey. Unete hoy para hacer networking, participar en eventos presenciales, y mas!",
    en: "The largest game developer community in Monterrey, Mexico. Join today to participate in networking, live events, and more!",
  },
  image: "/encontrol_logo.jpg",
};

export type PageMeta = {
  title?: string; // " | EnControl" is added
  description?: string;
  image?: string;
  noindex?: boolean; // keep the page out of search results (e.g. "not found")
};

// Search results cut descriptions off around 160 characters
const MAX_DESCRIPTION = 160;

function shorten(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX_DESCRIPTION) return clean;
  const cut = clean.slice(0, MAX_DESCRIPTION - 1);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

function absolute(url: string): string {
  return url.startsWith("/") ? ORIGIN + url : url;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!content) return el?.remove();
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.append(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.append(el);
  }
  el.href = href;
}

export function usePageMeta({
  title,
  description,
  image,
  noindex,
}: PageMeta = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | EnControl` : t(site.title);
    const desc = shorten(description || t(site.description));
    const img = absolute(image || site.image);
    const urlIn = (l: Lang) => ORIGIN + localizedPath(l, pathname);

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex" : "");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:image", img);
    setMeta("property", "og:url", urlIn(lang));
    setMeta("property", "og:locale", locale.replace("-", "_"));
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", img);
    setLink("canonical", urlIn(lang));
    setLink("alternate", urlIn("es"), "es");
    setLink("alternate", urlIn("en"), "en");
    setLink("alternate", urlIn("es"), "x-default");
  }, [title, description, image, noindex, pathname]);
}
