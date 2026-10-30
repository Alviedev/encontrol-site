import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./style.css";
import { basename, lang, redirectToPreferredLang } from "./i18n";

if (!redirectToPreferredLang()) {
  document.documentElement.lang = lang;
  // Built pages already contain their pre-rendered HTML; this replaces it with the live app
  ReactDOM.createRoot(document.getElementById("app")!).render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>,
  );
}
