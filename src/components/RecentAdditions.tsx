import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import { developers } from "../data/developers";
import styles from "./RecentAdditions.module.css";

type Recent = { source: string; games: string[]; developers: string[] };

// Dev only: floating list of the games and developers added by the current
// changes (or the last commit), served by the plugin in vite.config.ts
function RecentAdditions() {
  const [recent, setRecent] = useState<Recent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/__recent")
      .then((res) => res.json())
      .then(setRecent)
      .catch(() => setRecent(null));
  }, []);

  if (!recent) return null;
  const newGames = games.filter((g) => recent.games.includes(g.slug));
  const newDevs = developers.filter((d) => recent.developers.includes(d.slug));

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel}>
          <p className={styles.source}>New in: {recent.source}</p>
          <h4>Games ({newGames.length})</h4>
          <ul>
            {newGames.map((g) => (
              <li key={g.slug}>
                <Link to={`/games/${g.slug}`}>{g.title}</Link>
              </li>
            ))}
          </ul>
          <h4>Developers ({newDevs.length})</h4>
          <ul>
            {newDevs.map((d) => (
              <li key={d.slug}>
                <Link to={`/developers/${d.slug}`}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        NEW: {newGames.length} games · {newDevs.length} devs
      </button>
    </div>
  );
}

export default RecentAdditions;
