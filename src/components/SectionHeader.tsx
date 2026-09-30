import { Link } from "react-router-dom";
import styles from "./SectionHeader.module.css";

// Section title with a "see all" link on the right
function SectionHeader({
  title,
  to,
  linkLabel,
}: {
  title: string;
  to: string;
  linkLabel: string;
}) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <Link to={to} className={styles.seeAll}>
        {linkLabel} →
      </Link>
    </div>
  );
}

export default SectionHeader;
