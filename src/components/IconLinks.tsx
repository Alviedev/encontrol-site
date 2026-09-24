import { type IconType } from "react-icons";
import styles from "./IconLinks.module.css";

// Must list every link key, so a new link type can't be added without an icon
export type IconMap<K extends string> = Record<
  K,
  [label: string, Icon: IconType]
>;

// Renders an icon link for each key in
function IconLinks<K extends string>({
  links,
  icons,
  className,
}: {
  links: Partial<Record<K, string>>;
  icons: IconMap<K>;
  className?: string;
}) {
  return (
    <div className={`${styles.icons} ${className ?? ""}`}>
      {(Object.entries(icons) as [K, IconMap<K>[K]][]).map(
        ([key, [label, Icon]]) =>
          links[key] && (
            <a
              key={key}
              href={links[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ),
      )}
    </div>
  );
}

export default IconLinks;
