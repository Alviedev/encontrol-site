import styles from "./ButtonGroup.module.css";

// Labeled row of toggle buttons, e.g. "Ordenar por: [Aleatorio] [Título]"
function ButtonGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: [value: T, label: string][];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className={styles.group}>
      <span>{label}</span>
      {options.map(([option, text]) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={value === option ? styles.active : ""}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
