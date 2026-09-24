import { Link } from "react-router-dom";
import { developers } from "../../data/developers";
import { games } from "../../data/games";
import styles from "./Developers.module.css";
import SocialIcons from "../../components/SocialIcons";
import { useState, useMemo } from "react";
import ReportButton from "../../components/ReportButton";

type SortMode = "random" | "alpha" | "games";

const randomOrder = [...developers].sort(() => Math.random() - 0.5);

function Developers() {
  const [sort, setSort] = useState<SortMode>("random");

  const sorted = useMemo(() => {
    switch (sort) {
      case "random":
        return randomOrder;
      case "alpha":
        return [...developers].sort((a, b) => a.name.localeCompare(b.name));
      case "games":
        return [...developers].sort((a, b) => {
          const aCount = games.filter((g) =>
            g.developers.some((d) => d.name === a.name),
          ).length;
          const bCount = games.filter((g) =>
            g.developers.some((d) => d.name === b.name),
          ).length;
          return bCount - aCount;
        });
    }
  }, [sort]);
  return (
    <div>
      <section className={styles.intro}>
        <h1>Desarrolladores</h1>
        <p>Los estudios e individuos detrás de los juegos en Nuevo León.</p>
        <p>
          Para agregarte o tu equipo,
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
            onClick={() => setSort("alpha")}
            className={sort === "alpha" ? styles.active : ""}
          >
            Nombre
          </button>
          <button
            onClick={() => setSort("games")}
            className={sort === "games" ? styles.active : ""}
          >
            Juegos
          </button>
        </div>
      </section>

      <div className={styles.list}>
        {sorted.map((dev, index) => {
          const devGames = games.filter((g) =>
            g.developers.some((d) => d.name === dev.name),
          );

          return (
            <div
              key={dev.slug}
              className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              <Link to={`/developers/${dev.slug}`} className={styles.nameLink}>
                <div className={styles.logoWrap}>
                  {dev.logoUrl ? (
                    <img
                      src={dev.logoUrl}
                      alt={dev.name}
                      className={styles.logo}
                    />
                  ) : (
                    <div className={styles.logoPlaceholder}>{dev.name[0]}</div>
                  )}
                </div>
              </Link>

              <div className={styles.info}>
                <Link
                  to={`/developers/${dev.slug}`}
                  className={styles.nameLink}
                >
                  <h3>{dev.name}</h3>
                </Link>
                <SocialIcons links={dev.links} />
                {devGames.length > 0 && (
                  <div className={styles.gameList}>
                    {devGames.map((g) => (
                      <Link
                        key={g.slug}
                        to={`/games/${g.slug}`}
                        className={styles.gameChip}
                      >
                        {g.title}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  to={`/developers/${dev.slug}`}
                  className={styles.pageLink}
                >
                  Ver perfil
                </Link>
                <ReportButton
                  type="developer"
                  name={dev.name}
                  slug={dev.slug}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Developers;
