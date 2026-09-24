import { useState, useMemo } from "react";
import { games } from "../../data/games";
import { type Game, type ReleaseDate, formatRelease } from "../../data/common";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import SocialIcons from "../../components/SocialIcons";
import StoreIcons from "../../components/StoreIcons";
import ReportButton from "../../components/ReportButton";

function getReleaseOrder(release: ReleaseDate): number {
  switch (release.type) {
    case "date":
      return parseInt(release.value.slice(0, 4));
    case "year":
      return release.value;
    case "quarter":
      return parseInt(release.value.split(" ")[1]);
    case "tbd":
      return Infinity;
  }
}

function getSteamImage(game: Game): string {
  if (game.steamid) {
    return `https://cdn.akamai.steamstatic.com/steam/apps/${game.steamid}/header.jpg`;
  } else if (game.imageUrl) {
    return game.imageUrl;
  }
  return "";
}

type SortMode = "random" | "title" | "release";

const randomOrder = [...games].sort(() => Math.random() - 0.5);

function List() {
  const [sort, setSort] = useState<SortMode>("random");

  const sorted = useMemo(() => {
    switch (sort) {
      case "random":
        return randomOrder;
      case "title":
        return [...games].sort((a, b) => a.title.localeCompare(b.title));
      case "release":
        return [...games].sort(
          (a, b) => getReleaseOrder(a.release) - getReleaseOrder(b.release),
        );
    }
  }, [sort]);

  return (
    <div>
      <section className={styles.intro}>
        <h1>Juegos de la Comunidad</h1>
        <p>Una colección de Videojuegos hechos en Nuevo León.</p>
        <p>
          Para agregar tu proyecto,
          <Link to={`https://forms.gle/Cf8xVBgmKebvaeYs5`}>
            llena este enlace (Link a Google Forms).
          </Link>
        </p>
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
      </section>

      <div className={styles.list}>
        {sorted.map((game, index) => (
          <div
            key={game.id}
            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <Link to={`/games/${game.slug}`} className={styles.imageWrap}>
              <img
                src={getSteamImage(game)}
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
