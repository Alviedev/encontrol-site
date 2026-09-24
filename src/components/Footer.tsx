import styles from "./Footer.module.css";
import { DISCORD_INVITE, INSTAGRAM_URL } from "../data/socials";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  function setOpen(_arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.support}>
        Con el apoyo de:
        <a
          href="https://www.jetbrains.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Jetbrains"
        >
          <img
            className={styles.supportImage}
            src="support\jetbrains-mono-white.svg"
            alt="JetBrains logo."
            width={"150px"}
          ></img>
          <p className={styles.copyright}>
            Copyright © 2026 JetBrains s.r.o. JetBrains and the JetBrains logo
            are trademarks of JetBrains s.r.o.
          </p>
        </a>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} EnControl. Todos los derechos reservados.
      </p>

      <div className={styles.social}>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://bsky.app/profile/encontrol.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Bluesky"
        >
          <FaBluesky />
        </a>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
      <Link
        className={styles.link}
        to="/showreel"
        onClick={() => setOpen(false)}
      >
        Showreel
      </Link>
    </footer>
  );
}

export default Footer;
