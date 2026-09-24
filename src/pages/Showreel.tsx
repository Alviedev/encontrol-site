import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QRCode } from "react-qr-code";
import { games } from "../data/games";
import { isReleased } from "../data/common";
import styles from "./Showreel.module.css";

const clips = games
  .filter((g) => g.clip !== undefined)
  .sort(() => Math.random() - 0.5);

function Showreel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  // wishlist
  const [wishlistPeek, setWishlistPeek] = useState(false);
  const [peekOffset, setPeekOffset] = useState(160);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wishlistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const game = clips[current];
  const clip = game?.clip;
  const showWishlist = !game || !isReleased(game.release);

  function advance() {
    setVisible(false); //fadeout
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % clips.length);
    }, 500);
  }

  function handleReady() {
    setVisible(true);
  }

  useEffect(() => {
    if (!clip) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (wishlistTimerRef.current) clearTimeout(wishlistTimerRef.current);

    setVisible(false);
    setWishlistPeek(false);

    if (clip.type === "youtube") {
      // iframe has no load event, give it a moment
      setTimeout(handleReady, 750);
    }

    // set wishlist timer
    if (showWishlist) {
      wishlistTimerRef.current = setTimeout(() => setWishlistPeek(true), 1500);
    }

    const DEFAULT_DURATION = 20; // seconds

    // then when setting the timer:
    timerRef.current = setTimeout(
      advance,
      (clip.duration ?? DEFAULT_DURATION) * 1000,
    );

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (wishlistTimerRef.current) clearTimeout(wishlistTimerRef.current);
    };
  }, [current]);

  useEffect(() => {
    function measure() {
      if (overlayRef.current) {
        setPeekOffset(overlayRef.current.offsetHeight - 4);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (clips.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No hay clips disponibles todavía.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img
        src="/encontrol_logo_white.png"
        alt="EnControl"
        className={styles.bgLogo}
      />

      <div
        className={`${styles.player} ${visible ? styles.visible : styles.hidden}`}
      >
        {clip?.type === "youtube" && (
          <iframe
            className={styles.video}
            // tried a bunch of parameters. none worked. youtube still always shows the basic controls
            src={`${clip.url}&controls=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}

        {showWishlist && (
          <div
            className={styles.wishlistBadge}
            style={{
              bottom: wishlistPeek ? peekOffset : 0,
              zIndex: wishlistPeek ? 2 : 0,
            }}
          >
            Wishlist!
          </div>
        )}

        <div className={styles.overlay} ref={overlayRef}>
          <Link to={`/games/${game.slug}`} className={styles.overlayLink}>
            <div className={styles.overlayTextGroup}>
              <span className={styles.overlayTitle}>{game.title}</span>
              <span className={styles.overlayDev}>
                {game.developers.map((d) => `@${d.name}`).join(" · ")}
              </span>
            </div>
            <div className={styles.qrQuietZone}>
              <QRCode
                size={128}
                value={
                  game.store.steam
                    ? game.store.steam
                    : `https://encontrol.dev/games/${game.slug}`
                }
              />
            </div>
          </Link>
        </div>

        <div className={styles.controls}>
          <button
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              advance();
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showreel;
