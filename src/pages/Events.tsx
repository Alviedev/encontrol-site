import { useState } from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import {
  events,
  isPast,
  formatEventDate,
  formatLocation,
} from "../data/events";
import styles from "./Events.module.css";

const pastEvents = events.filter(isPast);

function Events() {
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const past = [...pastEvents].sort((a, b) => {
    const diff = a.date.localeCompare(b.date);
    return order === "asc" ? diff : -diff;
  });

  return (
    <div>
      <section className="intro">
        <h1>Eventos</h1>
        <p>Juntadas, meetups y más de la comunidad EnControl.</p>

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

      <UpcomingEvents />

      <section className={styles.pastSection}>
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
              className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              {event.imageUrl && (
                <div className={styles.imageWrap}>
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className={styles.cardImage}
                  />
                </div>
              )}
              <div
                className={`${styles.cardInfo} ${!event.imageUrl ? styles.cardInfoFull : ""}`}
              >
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
