import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styles from "./Header.module.css";

const links = [
  ["/", "Inicio"],
  ["/about", "Nosotros"],
  ["/events", "Eventos"],
  ["/developers", "Devs"],
  ["/games", "Juegos"],
  ["/contact", "Contacto"],
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
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
      </nav>
    </motion.header>
  );
}

export default Header;
