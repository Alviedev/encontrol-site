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
            es: "La comunidad abierta de desarrollo de videojuegos más grande de Monterrey.",
            en: "The largest videogame development community in Monterrey, Mexico",
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
              <h2>Únete al Discord</h2>
              <p>
                {t({
                  es: "Núcleo de reunion, organizacion, y discusion de temas \n relacionados a videojuegos y la comunidad.",
                  en: "Hub for meetups, organizing, and discussing topics \n revolving videogames and the community.",
                })}
              </p>
              {discordCounts.members && (
                <p className={styles.stats}>
                  <span>{discordCounts.members} miembros</span>
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
              <h2>Síguenos en Instagram</h2>
              <p>
                Sitio de difusión de comunicados. Danos follow para estar al
                pendiente de todos los eventos, juntadas, proyectos y más!
              </p>
              <p className={styles.stats}>
                <span>{INSTAGRAM_FOLLOWERS} seguidores</span>
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardButton} ${styles.instagramButton}`}
            >
              <FaInstagram />
              Seguir
            </a>
          </section>
        </div>
      </section>

      <FeaturedGame />
      <UpcomingEvents />
      <section className={styles.section}>
        <h2>¿Quiénes somos?</h2>
        <h3>Comunidad abierta de desarrolladores de videojuegos</h3>
        <p>
          Somos una comunidad abierta a todos, no es exclusiva, se invita a
          unirse y participar a todos los interesados, ya sean profesionistas,
          de hobby, novatos o veteranos.
        </p>
        <p>
          Todos somos game devs. No es necesario haber publicado, o estar en la
          industria para pertenecer a la comunidad.
        </p>
      </section>
      <section className={styles.section}>
        <h2>¿Qué hacemos?</h2>
        <p>
          Meetups presenciales: Juntadas de presentaciones y networking en
          diversas sedes. No hay un fin en particular para las presentaciones,
          puede ser presentarse a la comunidad, compartir progreso, promocionar
          proyectos propios
        </p>
        <p>
          Coworking virtual: Espacio semanal para trabajar, compartir trabajo o
          simplemente platicar en torno a la industria
        </p>
        <p>
          Bytes presenciales: Presencia en eventos locales como convenciones,
          artist alleys, conferencias
        </p>
      </section>
    </div>
  );
}

export default Home;
