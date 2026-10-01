import styles from "./Home.module.css";
import {
  DISCORD_INVITE,
  discordCounts,
  INSTAGRAM_URL,
  INSTAGRAM_FOLLOWERS,
} from "../data/socials";
import UpcomingEvents from "../components/UpcomingEvents";
import FeaturedGame from "../components/FeaturedGame";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { t } from "../i18n";

const WAVE_WIDTH = 400;
const WAVE_HEIGHT = 30;
const WAVE_PERIODS = 2;
const WAVE_AMPLITUDE = 10;

function buildSineWavePath() {
  const steps = 400;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (WAVE_WIDTH / steps) * i;
    const y =
      WAVE_HEIGHT / 2 -
      WAVE_AMPLITUDE * Math.sin((x / WAVE_WIDTH) * WAVE_PERIODS * Math.PI * 2);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M${points.join(" L")}`;
}

const SINE_WAVE_PATH = buildSineWavePath();

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img
          src="/encontrol_logo_white.png"
          alt="EnControl Logo"
          className={styles.logo}
        />
        <svg
          className={styles.wave}
          viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className={styles.wavePath} d={SINE_WAVE_PATH} />
        </svg>

        <h1>
          {t({ es: "Bienvenido a EnControl", en: "Welcome to EnControl" })}
        </h1>
        <img
          src="/gifs/starbig.png"
          alt="estrellita jiji"
          className={styles.star}
          style={{ top: "190px", left: "75%", height: "20px" }}
        />
        <img
          src="/gifs/starbig.png"
          alt="estrellita jiji"
          className={styles.star}
          style={{ top: "120px", left: "20%", height: "60px" }}
        />
        <img
          src="/gifs/starbig.png"
          alt="estrellita jiji"
          className={styles.star}
          style={{ top: "280px", left: "22.5%", height: "10px" }}
        />
        <p>
          {t({
            es: "La comunidad abierta de desarrolladores de videojuegos más grande de Monterrey.",
            en: "The largest videogame developer community in Monterrey, Mexico",
          })}
        </p>
        <p>
          {t({
            es: "Participa a traves de los siguientes medios:",
            en: "Join using the following links:",
          })}
        </p>
        <div className={styles.grid}>
          <section className={`${styles.card} ${styles.discordCard}`}>
            <div className={styles.discordText}>
              <h2> {t({ es: "Únete al Discord", en: "Join our Discord" })}</h2>
              <p>
                {t({
                  es: "Núcleo de reunion, organizacion, y discusion de temas \n relacionados a videojuegos y la comunidad.",
                  en: "Hub for meetups, organizing, and discussing topics \n revolving videogames and the community.",
                })}
              </p>
              {discordCounts.members && (
                <p className={styles.stats}>
                  <span>
                    {discordCounts.members}{" "}
                    {t({ es: "miembros", en: "members" })}
                  </span>
                  {discordCounts.online && (
                    <span>
                      <span className={styles.onlineDot} aria-hidden="true" />
                      {discordCounts.online}{" "}
                      {t({ es: "en linea", en: "online" })}
                    </span>
                  )}
                </p>
              )}
            </div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardButton} ${styles.discordButton}`}
            >
              <FaDiscord />
              {t({ es: "Unirse al servidor", en: "Join server" })}
            </a>
          </section>
          <section className={`${styles.card} ${styles.instagramCard}`}>
            <div className={styles.discordText}>
              <h2>
                {t({
                  es: "Síguenos en Instagram",
                  en: "Follow us on Instagram",
                })}
              </h2>
              <p>
                {t({
                  es: "Sitio de difusión de comunicados. Danos follow para estar al pendiente de todos los eventos, juntadas, proyectos y más!",
                  en: "Broadcasting channel for communications. Follow us for events, meetups, community projects and more!",
                })}
              </p>
              <p className={styles.stats}>
                <span>
                  {INSTAGRAM_FOLLOWERS}{" "}
                  {t({ es: "seguidores", en: "followers" })}
                </span>
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardButton} ${styles.instagramButton}`}
            >
              <FaInstagram />
              {t({ es: "Seguir", en: "Follow" })}
            </a>
          </section>
        </div>
      </section>

      <FeaturedGame />
      <UpcomingEvents />
      <section className={styles.section}>
        <h2> {t({ es: "¿Quiénes somos?", en: "Who are we?" })}</h2>
        <h3>
          {" "}
          {t({
            es: "Comunidad abierta de desarrolladores de videojuegos",
            en: "Open game developer community",
          })}
        </h3>
        <p>
          {t({
            es: "Somos una comunidad abierta a todos, no es exclusiva, se invita a unirse y participar a todos los interesados, ya sean profesionistas, de hobby, novatos o veteranos.",
            en: "Our community is open to all. No exclusivity. Anyone who is a professional, hobbyist, novice, veteran, or simply interested is welcome.",
          })}
        </p>
        <p>
          {t({
            es: "Todos somos game devs. No es necesario haber publicado, o estar en la industria para pertenecer a la comunidad.",
            en: "We are all game devs. It's not required to have published, or to work in the industry to belong in the community.",
          })}
        </p>
      </section>
      <section className={styles.section}>
        <h2>{t({ es: "¿Qué hacemos?", en: "What do we do?" })} </h2>
        <p>
          {t({
            es: "Meetups presenciales: Juntadas de presentaciones y networking en diversas sedes. No hay un fin en particular para las presentaciones, puede ser presentarse a la comunidad, compartir progreso, promocionar proyectos propios",
            en: "In-person meetups: Get-togethers with presentations and networking in diverse sites. Presentations don't have a particular topic, presenters are invited to introduce themselves to the community, share progress or knowledge, and promote projects they're working on.",
          })}
        </p>
        <p>
          {t({
            es: "Coworking: Espacio semanal para trabajar, compartir trabajo o simplemente platicar en torno a la industria",
            en: "Coworking: Virtual space to work in tandem with other members of the community, share help and receive help, as well as simply chatting about industry topics.",
          })}
        </p>
        <p>
          {t({
            es: "Bytes presenciales: Presencia en eventos locales como convenciones, artist alleys y conferencias",
            en: "In-person bytes: Local presence in local events such as conventions, artist alleys and conferences.",
          })}
        </p>
      </section>
    </div>
  );
}

export default Home;
