import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./style.css";
import { basename, lang, redirectToPreferredLang } from "./i18n";

if (!redirectToPreferredLang()) {
  document.documentElement.lang = lang;
  ReactDOM.createRoot(document.getElementById("app")!).render(
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>,
  );
}
