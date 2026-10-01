import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./SectionHeader.module.css";

// Section title with a "see all" link on the right
function SectionHeader({
  title,
  to,
  linkLabel,
  onLinkClick,
}: {
  title: string;
  to: string;
  linkLabel: string;
  onLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <Link to={to} className={styles.seeAll} onClick={onLinkClick}>
        {linkLabel} →
      </Link>
    </div>
  );
}

export default SectionHeader;
