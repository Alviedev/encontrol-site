import { Link } from "react-router-dom";
import { members } from "../data/team";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <section className="intro">
        <h1>Nosotros</h1>

        <h1>¿Dónde nace EnControl?</h1>
        <p>
          Nace cuando se hace la pregunta: “¿Cómo está el desarrollo de juegos
          en Nuevo León?” Se trata, entonces, de juntar a los que están
          interesados a participar en la industria, los que ya están dentro de
          la industria, y crear un espacio donde se pueda tener presencia de la
          “escena regia” Con esto, compartimos oportunidades, conocimientos y
          visibilidad, las cuales son vitales para el crecimiento individual y
          de la región .
        </p>

        <h1>Metas de EnControl</h1>
        <p>
          Elevar la comunidad gamedev regia. Crear un estilo de catálogo de
          personas especializadas. Entonces por ej. Si necesitas alguien de
          modelaje, audio, o arte tradiciona l, ya tienes un listado de personas
          locales con referencias .Invitar a la participación de eventos Dar
          seguimiento a proyectos e iniciativas
        </p>
      </section>

      <section className={styles.team}>
        <h2>El Equipo</h2>
        <div className={styles.grid}>
          {members.map((member) => (
            <Link
              key={member.id}
              to={`/about/${member.user}`}
              className={styles.back}
            >
              <div className={styles.card}>
                <h3>{member.name}</h3>
                <p>{member.user}</p>
                <img src={member.image} alt={member.name} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
