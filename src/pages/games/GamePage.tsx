import { useParams, Link } from "react-router-dom";
import { games } from "../../data/games";
import { formatRelease } from "../../data/common";
import styles from "./GamePage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import SocialIcons from "../../components/SocialIcons";
import StoreIcons from "../../components/StoreIcons";
import ReportButton from "../../components/ReportButton";
import DevLogo from "../../components/DevLogo";

function GamePage() {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className={styles.notFound}>
        <h1>Juego no encontrado</h1>
        <Link to="/games" className={styles.back}>
          <FaArrowLeft /> Volver a la lista
        </Link>
      </div>
    );
  }

  const relatedGames = games.filter(
    (g) =>
      g.slug !== game.slug &&
      g.developers.some((dev) =>
        game.developers.some((d) => d.name === dev.name),
      ),
  );

  return (
    <div className={styles.container}>
      <Link to="/games" className={styles.back}>
        <FaArrowLeft /> Volver a la lista
      </Link>

      <div className={styles.hero}>
        <img src={game.imageUrl} alt={game.title} className={styles.image} />
        <div className={styles.heroInfo}>
          <h1>{game.title}</h1>
          <p className={styles.release}>{formatRelease(game.release)}</p>
          <p>{game.description}</p>
          <div className={styles.section}>
            <h3>
              {game.developers.length > 1 ? "Desarrolladores" : "Desarrollador"}
            </h3>
            {game.developers.map((dev) => (
              <div key={dev.name} className={styles.devRow}>
                <Link to={`/developers/${dev.slug}`} className={styles.devLink}>
                  <DevLogo
                    dev={dev}
                    className={styles.teamLogo}
                    initial={false}
                  />
                  {dev.name}
                </Link>
                <SocialIcons links={dev.links} />
              </div>
            ))}
          </div>
          <div className={styles.section}>
            <h3>Disponible en</h3>
            <StoreIcons store={game.store} />
          </div>
          <ReportButton type="game" name={game.title} slug={game.slug} />
        </div>
      </div>

      {game.clip && (
        <div className={styles.clip}>
          {game.clip.type === "youtube" && (
            <iframe
              className={styles.clipVideo}
              src={game.clip.url.replace("?autoplay=1&mute=1", "?mute=1")}
              allow="fullscreen"
              allowFullScreen
            />
          )}
        </div>
      )}

      {relatedGames.length > 0 && (
        <div className={styles.related}>
          <h2>Más juegos de este desarrollador</h2>
          <div className={styles.relatedGrid}>
            {relatedGames.map((related) => (
              <Link
                key={related.id}
                to={`/games/${related.slug}`}
                className={styles.relatedCard}
              >
                <img
                  src={related.imageUrl}
                  alt={related.title}
                  className={styles.relatedImage}
                />
                <span>{related.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;
