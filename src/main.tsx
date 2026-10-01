import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./style.css";
import { basename, lang, redirectToPreferredLang } from "./i18n";

// English versions of the Spanish <head> metadata in index.html.
// Leave one as "" to keep the Spanish until it's written.
const enMeta = {
  title: "EnControl - Open game developer community based in Monterrey",
  description:
    "The largest game developer community in Monterrey, Mexico. Join today to participate in networking, live events, and more!",
};

function setMeta(selector: string, content: string) {
  if (content)
    document.querySelector(selector)?.setAttribute("content", content);
}

function applyEnglishMeta() {
  if (enMeta.title) document.title = enMeta.title;
  setMeta('meta[name="description"]', enMeta.description);
  setMeta('meta[property="og:title"]', enMeta.title);
  setMeta('meta[property="og:description"]', enMeta.description);
  setMeta('meta[name="twitter:title"]', enMeta.title);
  setMeta('meta[name="twitter:description"]', enMeta.description);
  setMeta('meta[property="og:locale"]', "en_US");
}

if (!redirectToPreferredLang()) {
  document.documentElement.lang = lang;
  if (lang === "en") applyEnglishMeta();
  ReactDOM.createRoot(document.getElementById("app")!).render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>,
  );
}
