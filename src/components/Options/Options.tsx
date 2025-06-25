import styles from "./Options.module.css";

type OptionsProps = {
  nameOption: string;
  optionChoose: string;
  onClick?: () => void;
}

export default function Options({nameOption, optionChoose, onClick}: OptionsProps) {
  return (
    <div className={styles.options}>
      <h4>{nameOption}</h4>
      <p onClick={onClick}>{optionChoose}</p>
      <i onClick={onClick} className={`fa-solid fa-chevron-up ${styles.chevronUp}`}></i>
      <i onClick={onClick} className={`fa-solid fa-chevron-down ${styles.chevronDown}`}></i>
    </div>
  );
}
