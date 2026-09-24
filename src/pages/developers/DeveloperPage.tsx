import { useParams, Link } from "react-router-dom";
import { developers } from "../../data/developers";
import { games } from "../../data/games";
import styles from "./DeveloperPage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import SocialIcons from "../../components/SocialIcons";
import ReportButton from "../../components/ReportButton";

function DeveloperPage() {
  const { slug } = useParams();
  const dev = developers.find((d) => d.slug === slug);

  if (!dev) {
    return (
      <div className={styles.notFound}>
        <h1>Desarrollador no encontrado</h1>
        <Link to="/developers" className={styles.back}>
          <FaArrowLeft /> Volver a desarrolladores
        </Link>
      </div>
    );
  }

  const devGames = games.filter((g) =>
    g.developers.some((d) => d.name === dev.name),
  );

  return (
    <div className={styles.container}>
      <Link to="/developers" className={styles.back}>
        <FaArrowLeft /> Volver a desarrolladores
      </Link>

      <div className={styles.hero}>
        <div className={styles.logoWrap}>
          {dev.logoUrl ? (
            <img src={dev.logoUrl} alt={dev.name} className={styles.logo} />
          ) : (
            <div className={styles.logoPlaceholder}>{dev.name[0]}</div>
          )}
        </div>
        <div className={styles.heroInfo}>
          <h1>{dev.name}</h1>
          {dev.bio && <p className={styles.bio}>{dev.bio}</p>}
          <SocialIcons links={dev.links} className={styles.icons} />
          <ReportButton type="developer" name={dev.name} slug={dev.slug} />
        </div>
      </div>

      {devGames.length > 0 && (
        <div className={styles.games}>
          <div className={styles.gamesGrid}>
            {devGames.map((game) => (
              <Link
                key={game.slug}
                to={`/games/${game.slug}`}
                className={styles.gameCard}
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className={styles.gameImage}
                />
                <span>{game.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperPage;
