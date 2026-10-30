import { Link } from "react-router-dom";
import type { Game } from "../data/common";
import GameCover from "./GameCover";
import styles from "./GameGrid.module.css";

// Grid of game thumbnails linking to each game's page
function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <Link key={game.slug} to={`/games/${game.slug}`} className={styles.card}>
          <GameCover game={game} className={styles.cover} />
          <span>{game.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default GameGrid;
