import styles from "./Options.module.css";

type OptionsProps = {
  nameOption: string;
  optionChoose: string;
  onClick?: () => void;
  className?: string;
}

export default function Options({nameOption, optionChoose, onClick, className}: OptionsProps) {
  return (
    <div className={`${styles.options} ${className}`}>
      <h4>{nameOption}</h4>
      <p onClick={onClick}>{optionChoose}</p>
      <i onClick={onClick} className={`fa-solid fa-chevron-up ${styles.chevronUp}`}></i>
      <i onClick={onClick} className={`fa-solid fa-chevron-down ${styles.chevronDown}`}></i>
    </div>
  );
}
