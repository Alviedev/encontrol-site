import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styles from "./Header.module.css";
import { lang, switchLang, t } from "../i18n";

const links = [
  ["/", t({ es: "Inicio", en: "" })],
  ["/about", t({ es: "Nosotros", en: "" })],
  ["/events", t({ es: "Eventos", en: "" })],
  ["/developers", t({ es: "Devs", en: "" })],
  ["/games", t({ es: "Juegos", en: "" })],
  ["/contact", t({ es: "Contacto", en: "" })],
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide while scrolling down, show again as soon as the user scrolls up
  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > (scrollY.getPrevious() ?? 0) && y > 150);
  });

  return (
    <motion.header
      className={styles.header}
      animate={
        hidden && !open ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link to="/" className={styles.logo}>
        <img src="/encontrol_logo_animated.gif" alt="EnControl" />
      </Link>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label={
          open
            ? t({ es: "Cerrar menú", en: "" })
            : t({ es: "Abrir menú", en: "" })
        }
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        {lang === "es" ? (
          <button
            className={`${styles.link} ${styles.lang}`}
            onClick={() => switchLang("en")}
            lang="en"
            aria-label="English"
          >
            EN
          </button>
        ) : (
          <button
            className={`${styles.link} ${styles.lang}`}
            onClick={() => switchLang("es")}
            lang="es"
            aria-label="Español"
          >
            ES
          </button>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;
