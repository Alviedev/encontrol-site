import { useState, useMemo } from "react";
import { games } from "../../data/games";
import { type ReleaseDate, formatRelease } from "../../data/common";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import SocialIcons from "../../components/SocialIcons";
import StoreIcons from "../../components/StoreIcons";
import ReportButton from "../../components/ReportButton";
import SignupButton from "../../components/SignupButton";
import ButtonGroup from "../../components/ButtonGroup";
import DevLogo from "../../components/DevLogo";

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
        <p>Colección de Videojuegos hechos en Nuevo León</p>
        <p>
          Para agregar tu proyecto,{" "}
          <SignupButton type="game" label="llena este formulario" />
        </p>
        <div className={styles.controls}>
          <ButtonGroup
            label="Ordenar por:"
            options={[
              ["random", "Aleatorio"],
              ["title", "Título"],
              ["release", "Fecha"],
            ]}
            value={sort}
            onChange={setSort}
          />
          <ButtonGroup
            label="Vista:"
            options={[
              ["compact", "Compacta"],
              ["poster", "Póster"],
            ]}
            value={view}
            onChange={setView}
          />
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
                <span>{formatRelease(game.release)}</span>
                <StoreIcons store={game.store} />
              </div>
              <p>{game.description}</p>
              <div className={styles.footer}>
                <div className={styles.devs}>
                  {game.developers.slice(0, 5).map((dev) => (
                    <Link
                      key={dev.name}
                      to={`/developers/${dev.slug}`}
                      className={styles.devLink}
                    >
                      <DevLogo
                        dev={dev}
                        className={styles.teamLogo}
                        initial={false}
                      />
                      {dev.name}
                    </Link>
                  ))}
                  <SocialIcons links={game.developers[0].links} />
                </div>
                <ReportButton type="game" name={game.title} slug={game.slug} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
