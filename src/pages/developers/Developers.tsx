import { Link } from "react-router-dom";
import { developers } from "../../data/developers";
import { gamesByDev } from "../../data/games";
import styles from "./Developers.module.css";
import SocialIcons from "../../components/SocialIcons";
import { useState, useMemo } from "react";
import ReportButton from "../../components/ReportButton";
import SignupButton from "../../components/SignupButton";
import ButtonGroup from "../../components/ButtonGroup";
import DevLogo from "../../components/DevLogo";
import { FaGamepad } from "react-icons/fa";

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
        return [...developers].sort(
          (a, b) => gamesByDev(b).length - gamesByDev(a).length,
        );
    }
  }, [sort]);

  return (
    <div>
      <section className="intro">
        <h1>Desarrolladores</h1>
        <p>Los estudios e individuos detrás de los juegos en Nuevo León.</p>
        <p>
          Para agregarte o tu equipo,{" "}
          <SignupButton type="developer" label="llena este formulario" />
        </p>
        <ButtonGroup
          label="Ordenar por:"
          options={[
            ["random", "Aleatorio"],
            ["alpha", "Nombre"],
            ["games", "Juegos"],
          ]}
          value={sort}
          onChange={setSort}
        />
      </section>

      <div className={styles.list}>
        {sorted.map((dev) => {
          const devGames = gamesByDev(dev);

          return (
            <div key={dev.slug} className={styles.card}>
              <Link to={`/developers/${dev.slug}`} className={styles.header}>
                <DevLogo dev={dev} className={styles.logo} />
                <h3>{dev.name}</h3>
              </Link>
              <div className={styles.report}>
                <ReportButton
                  type="developer"
                  name={dev.name}
                  slug={dev.slug}
                />
              </div>

              <SocialIcons links={dev.links} />
              {devGames.length > 0 && (
                <div className={styles.gameList}>
                  {devGames.map((g) => (
                    <Link
                      key={g.slug}
                      to={`/games/${g.slug}`}
                      className={styles.gameLink}
                    >
                      {g.iconUrl ? (
                        <img
                          src={g.iconUrl}
                          alt=""
                          className={styles.gameIcon}
                        />
                      ) : (
                        <FaGamepad className={styles.gameIcon} />
                      )}
                      {g.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Developers;
