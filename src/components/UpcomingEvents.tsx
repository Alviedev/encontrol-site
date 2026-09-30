import {
  events,
  isPast,
  formatEventDate,
  formatLocation,
} from "../data/events";
import styles from "./UpcomingEvents.module.css";
import SectionHeader from "./SectionHeader";
import buttonStyles from "./ArrowButton.module.css";

const upcoming = events.filter((e) => !isPast(e));

function UpcomingEvents() {
  if (upcoming.length === 0) return null;

  return (
    <section className={styles.section}>
      <SectionHeader
        title="Próximos Eventos"
        to="/events"
        linkLabel="Ver todos"
      />
      <div className={styles.grid}>
        {upcoming.map((event) => (
          <div key={event.title} className={styles.card}>
            {event.imageUrl && (
              <img
                src={event.imageUrl}
                alt={event.title}
                className={styles.image}
              />
            )}
            <div className={styles.info}>
              <span className={styles.date}>{formatEventDate(event)}</span>
              <h3>{event.title}</h3>
              <span className={styles.location}>
                {formatLocation(event.location)}
              </span>
              <p>{event.description}</p>
              {event.registerUrl && (
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles.button}
                >
                  Regístrate
                  <span className={buttonStyles.arrow} aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
