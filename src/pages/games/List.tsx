import { useState, useMemo } from "react";
import { games } from "../../data/games";
import { type ReleaseDate, formatRelease } from "../../data/common";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import SocialIcons from "../../components/SocialIcons";
import StoreIcons from "../../components/StoreIcons";
import ReportButton from "../../components/ReportButton";

// Sortable "YYYY-MM-DD"-style key; vaguer releases sort after exact dates in the same period
function getReleaseOrder(release: ReleaseDate): string {
  switch (release.type) {
    case "date":
      return release.value;
    case "quarter": {
      const [q, year] = release.value.split(" ");
      const endMonth = String(Number(q.slice(1)) * 3).padStart(2, "0");
      return `${year}-${endMonth}-99`;
    }
    case "year":
      return `${release.value}-99`;
    case "tbd":
      return "9999";
  }
}

type SortMode = "random" | "title" | "release";

type ViewMode = "compact" | "poster";

const randomOrder = [...games].sort(() => Math.random() - 0.5);

function savedView(): ViewMode {
  try {
    return localStorage.getItem("gamesView") === "poster"
      ? "poster"
      : "compact";
  } catch {
    return "compact";
  }
}

function List() {
  const [sort, setSort] = useState<SortMode>("random");
  const [view, setViewState] = useState<ViewMode>(savedView);

  function setView(mode: ViewMode) {
    setViewState(mode);
    try {
      localStorage.setItem("gamesView", mode);
    } catch {
      // storage unavailable; the choice just won't be remembered
    }
  }

  const sorted = useMemo(() => {
    switch (sort) {
      case "random":
        return randomOrder;
      case "title":
        return [...games].sort((a, b) => a.title.localeCompare(b.title));
      case "release":
        return [...games].sort((a, b) =>
          getReleaseOrder(a.release).localeCompare(getReleaseOrder(b.release)),
        );
    }
  }, [sort]);

  return (
    <div>
      <section className="intro">
        <h1>Juegos de la Comunidad</h1>
        <p>Una colección de Videojuegos hechos en Nuevo León.</p>
        <p>
          Para agregar tu proyecto,
          <Link to={`https://forms.gle/Cf8xVBgmKebvaeYs5`}>
            llena este enlace (Link a Google Forms).
          </Link>
        </p>
        <div className={styles.controls}>
          <div className={styles.sorting}>
            <span>Ordenar por:</span>
            <button
              onClick={() => setSort("random")}
              className={sort === "random" ? styles.active : ""}
            >
              Aleatorio
            </button>
            <button
              onClick={() => setSort("title")}
              className={sort === "title" ? styles.active : ""}
            >
              Título
            </button>
            <button
              onClick={() => setSort("release")}
              className={sort === "release" ? styles.active : ""}
            >
              Fecha
            </button>
          </div>
          <div className={styles.sorting}>
            <span>Vista:</span>
            <button
              onClick={() => setView("compact")}
              className={view === "compact" ? styles.active : ""}
            >
              Compacta
            </button>
            <button
              onClick={() => setView("poster")}
              className={view === "poster" ? styles.active : ""}
            >
              Póster
            </button>
          </div>
        </div>
      </section>

      <div
        className={`${styles.list} ${view === "compact" ? styles.compact : ""}`}
      >
        {sorted.map((game, index) => (
          <div
            key={game.id}
            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <Link to={`/games/${game.slug}`} className={styles.imageWrap}>
              <img
                src={
                  view === "compact"
                    ? (game.capsuleUrl ?? game.imageUrl)
                    : game.imageUrl
                }
                alt={game.title}
                className={styles.image}
              />
            </Link>
            <div className={styles.info}>
              <Link to={`/games/${game.slug}`} className={styles.titleLink}>
                <h3>{game.title}</h3>
              </Link>
              <div className={styles.meta}>
                {game.developers.slice(0, 5).map((dev) => (
                  <div key={dev.name} className={styles.devEntry}>
                    <Link
                      to={`/developers/${dev.slug}`}
                      className={styles.devLink}
                    >
                      {dev.logoUrl && (
                        <img
                          src={dev.logoUrl}
                          alt={dev.name}
                          className={styles.teamLogo}
                        />
                      )}
                      {dev.name}
                    </Link>
                  </div>
                ))}
                <span>{formatRelease(game.release)}</span>
              </div>
              <SocialIcons links={game.developers[0].links} />
              <p>{game.description}</p>
              <StoreIcons store={game.store} />
              <ReportButton type="game" name={game.title} slug={game.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
