import { useEffect, useRef, useState } from "react";
import UpcomingEvents, { PAST_EVENTS_ID } from "../components/UpcomingEvents";
import {
  events,
  isPast,
  formatEventDate,
  formatLocation,
} from "../data/events";
import styles from "./Events.module.css";

const pastEvents = events.filter(isPast);

// Counts how many timeline cards the middle of the viewport has scrolled past
function useTimelineProgress(order: string) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      setReached(
        cardRefs.current.filter((card) => {
          if (!card) return false;
          const { top, height } = card.getBoundingClientRect();
          return top + height / 2 <= middle;
        }).length,
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [order]);

  return { cardRefs, reached };
}

function Events() {
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const { cardRefs, reached } = useTimelineProgress(order);

  const past = [...pastEvents].sort((a, b) => {
    const diff = a.date.localeCompare(b.date);
    return order === "asc" ? diff : -diff;
  });

  return (
    <div>
      <h1>Eventos</h1>
      <p>Juntadas, meetups y más de la comunidad EnControl.</p>
      <UpcomingEvents />
      <section className={`intro ${styles.intro}`}>
        <h1>¿Por qué asistir a eventos?</h1>
        <p>
          Puedes ganar exposición para ti, tu projecto/juego/portafolio. Haces
          networking. Encuentras recursos, herramientas, ayuda, feedback e
          insipración constante para tu proyecto. Conoces a tu comunidad, haces
          amistades y entablas diálogo con gente similar, entras a un espacio
          seguro con personas de tu círculo, y conoces a todo tipo gente.
          Crecimiento propio e iniciativa. Es completamente gratuito. EnControl
          se empeña en ofrecer una experiencia completamente gratuita y
          herramientas abiertas para una experiencia lo más amigable y accesible
          posible.
        </p>
      </section>

      <section id={PAST_EVENTS_ID} className={styles.pastSection}>
        <h2>Eventos Pasados</h2>
        <p>Ordenando por:</p>
        <button
          className={styles.sortButton}
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
        >
          {order === "asc" ? "Más antiguos" : "Más recientes"}
        </button>
        <div className={styles.list}>
          {past.map((event, index) => (
            <div
              key={event.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              <span
                className={`${styles.dot} ${index < reached ? styles.reached : ""}`}
                aria-hidden="true"
              />
              {event.imageUrl && (
                <div className={styles.imageWrap}>
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className={styles.cardImage}
                  />
                </div>
              )}
              <div className={styles.cardInfo}>
                <span className={styles.date}>{formatEventDate(event)}</span>
                <h3>{event.title}</h3>
                <span className={styles.location}>
                  {formatLocation(event.location)}
                </span>
                <p>{event.recap ?? event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
