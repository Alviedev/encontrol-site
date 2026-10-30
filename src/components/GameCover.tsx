import type { CSSProperties } from "react";
import type { Game } from "../data/common";
import styles from "./GameCover.module.css";

// Wide game image: Steam's capsule when there is one; otherwise the cover
// (itch's are ~5:4) beside its screenshots, or over a blurred copy of itself
function GameCover({ game, className }: { game: Game; className?: string }) {
  const src = game.capsuleUrl ?? game.imageUrl;
  const split = !game.capsuleUrl && !!game.screenshots?.length;
  return (
    <div
      className={`${styles.cover} ${split ? styles.split : ""} ${className ?? ""}`}
      style={{ "--cover": `url("${src}")` } as CSSProperties}
    >
      <img src={src} alt={game.title} className={styles.image} />
      {split && (
        <div className={styles.screenshots}>
          {game.screenshots!.map((shot) => (
            <img key={shot} src={shot} alt="" loading="lazy" />
          ))}
        </div>
      )}
    </div>
  );
}

export default GameCover;
