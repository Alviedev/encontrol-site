import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { getFeaturedGame } from "../data/games";
import { formatRelease } from "../data/common";
import { t } from "../i18n";
import SectionHeader from "./SectionHeader";
import StoreIcons from "./StoreIcons";
import styles from "./FeaturedGame.module.css";
import buttonStyles from "./ArrowButton.module.css";

const game = getFeaturedGame();

function FeaturedGame() {
  // The trailer only loads once the visitor asks for it
  const [playing, setPlaying] = useState(false);
  const clip = game.clip?.type === "youtube" ? game.clip : undefined;
  const cover = (
    <img
      src={game.capsuleUrl ?? game.imageUrl}
      alt=""
      className={styles.image}
    />
  );

  return (
    <section className={styles.section}>
      <SectionHeader
        title={t({ es: "Juego destacado", en: "Featured game" })}
        to="/games"
        linkLabel={t({ es: "Ver todos", en: "View all" })}
      />
      <div className={styles.card}>
        <div className={styles.media}>
          {!clip ? (
            <Link to={`/games/${game.slug}`} tabIndex={-1}>
              {cover}
            </Link>
          ) : playing ? (
            <iframe
              className={styles.clip}
              // started by a click, so it can play with sound
              src={clip.url.replace("&mute=1", "")}
              title={game.title}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <button
              className={styles.play}
              onClick={() => setPlaying(true)}
              aria-label={t({ es: "Ver tráiler", en: "" })}
            >
              {cover}
              <span className={styles.playIcon} aria-hidden="true">
                <FaPlay />
              </span>
            </button>
          )}
        </div>
        <div className={styles.info}>
          <span className={styles.release}>{formatRelease(game.release)}</span>
          <h3>{game.title}</h3>
          <span className={styles.devs}>
            {game.developers.map((d) => d.name).join(" · ")}
          </span>
          <p className={styles.description}>{t(game.description)}</p>
          <StoreIcons store={game.store} />
          <Link to={`/games/${game.slug}`} className={buttonStyles.button}>
            {t({ es: "Ver juego", en: "View game" })}
            <span className={buttonStyles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;
