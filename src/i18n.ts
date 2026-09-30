// Spanish lives at the root ("/games"), English under "/en" ("/en/games").
// Switching language reloads the page, so the language is fixed for the page's lifetime.
export type Lang = "es" | "en";

const EN_PREFIX = "/en";
const STORAGE_KEY = "lang";

// Path without the "/en" prefix, if it has one
function stripPrefix(pathname: string): string | null {
  if (pathname === EN_PREFIX) return "/";
  if (pathname.startsWith(EN_PREFIX + "/"))
    return pathname.slice(EN_PREFIX.length);
  return null;
}

export const lang: Lang = stripPrefix(location.pathname) === null ? "es" : "en";

// Router basename for the current language
export const basename = lang === "en" ? EN_PREFIX : undefined;

// Text in both languages. Leave one as "" to show the other until it's written.
export type Localized = { es: string; en: string };

export function t(text: Localized): string {
  return text[lang] || text[lang === "es" ? "en" : "es"];
}

// For number/date formatting
export const locale = lang === "es" ? "es-MX" : "en-US";

function savedLang(): Lang | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "es" || saved === "en" ? saved : null;
  } catch {
    return null;
  }
}

// First of the browser's preferred languages that we support; Spanish otherwise
function browserLang(): Lang {
  for (const l of navigator.languages ?? [navigator.language]) {
    if (l.startsWith("es")) return "es";
    if (l.startsWith("en")) return "en";
  }
  return "es";
}

function urlFor(to: Lang): string {
  const path = stripPrefix(location.pathname) ?? location.pathname;
  const prefixed = to === "en" ? EN_PREFIX + (path === "/" ? "" : path) : path;
  return prefixed + location.search + location.hash;
}

// Unprefixed URLs follow the visitor's choice (or browser language) and redirect to English if needed.
// "/en" URLs are always shown in English, so shared links open as sent.
// Returns true when redirecting, so the app shouldn't render.
export function redirectToPreferredLang(): boolean {
  if (lang === "en" || (savedLang() ?? browserLang()) === "es") return false;
  location.replace(urlFor("en"));
  return true;
}

export function switchLang(to: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, to);
  } catch {
    // storage unavailable; the choice just won't be remembered
  }
  document.documentElement.lang = to;
  location.assign(urlFor(to));
}
