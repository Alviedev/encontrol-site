import { useParams, Link } from "react-router-dom";
import { developers } from "../../data/developers";
import { gamesByDev } from "../../data/games";
import styles from "./DeveloperPage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import SocialIcons from "../../components/SocialIcons";
import ReportButton from "../../components/ReportButton";
import DevLogo from "../../components/DevLogo";
import { usePageMeta } from "../../meta";

const NOT_FOUND = "Desarrollador no encontrado";

function DeveloperPage() {
  const { slug } = useParams();
  const dev = developers.find((d) => d.slug === slug);
  usePageMeta(
    dev
      ? { title: dev.name, description: dev.bio, image: dev.logoUrl }
      : { title: NOT_FOUND, noindex: true },
  );

  if (!dev) {
    return (
      <div className={styles.notFound}>
        <h1>{NOT_FOUND}</h1>
        <Link to="/developers" className={styles.back}>
          <FaArrowLeft /> Volver a desarrolladores
        </Link>
      </div>
    );
  }

  const devGames = gamesByDev(dev);

  return (
    <div className={styles.container}>
      <Link to="/developers" className={styles.back}>
        <FaArrowLeft /> Volver a desarrolladores
      </Link>

      <div className={styles.hero}>
        <div className={styles.logoWrap}>
          <DevLogo dev={dev} className={styles.logo} />
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
