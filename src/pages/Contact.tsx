import styles from "./Contact.module.css";
import { DISCORD_INVITE, INSTAGRAM_URL } from "../data/socials";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaBluesky, FaDiscord } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <section className={styles.intro}>
        <h1>Contacto</h1>
        <p>Entremos en contacto! Estamos presentes en los siguientes medios:</p>
      </section>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Redes sociales</h2>
          <p>Síguenos para estar al tanto de novedades, eventos y más.</p>
          <div className={styles.socialLinks}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://bsky.app/profile/encontrol.dev"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaBluesky />
              <span>Bluesky</span>
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Contacto directo</h2>
          <p>
            Para una comunicacion mas directa, favor de mandarnos un correo o
            mensaje en discord.
          </p>
          <a href="mailto:contact@encontrol.dev" className={styles.emailLink}>
            <FaEnvelope />
            <span>contact@encontrol.dev</span>
          </a>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaDiscord />
            Unirse al servidor
          </a>
        </section>
      </div>
    </div>
  );
}

export default Contact;
