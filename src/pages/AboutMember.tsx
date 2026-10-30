import { useParams, Link } from "react-router-dom";
import styles from "./games/GamePage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { members } from "../data/team";
import SocialIcons from "../components/SocialIcons";
import { usePageMeta } from "../meta";

const NOT_FOUND = "Miembro no encontrado";

function AboutMember() {
  const { user } = useParams();
  const member = members.find((m) => m.user === user);
  usePageMeta(
    member
      ? {
          title: member.name,
          description: member.description,
          image: member.image,
        }
      : { title: NOT_FOUND, noindex: true },
  );

  if (!member) {
    return (
      <div className={styles.notFound}>
        <h1>{NOT_FOUND}</h1>
        <Link to="/about" className={styles.back}>
          <FaArrowLeft /> Volver a Nosotros
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.back}>
        <FaArrowLeft /> Volver a Nosotros
      </Link>

      <div className={styles.hero}>
        <img src={member.image} alt={member.name} className={styles.image} />
        <div className={styles.heroInfo}>
          <h1>{member.name}</h1>
          <p>{member.description}</p>

          <div className={styles.section}>
            <h3>Links:</h3>
            {member.links && <SocialIcons links={member.links} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMember;
