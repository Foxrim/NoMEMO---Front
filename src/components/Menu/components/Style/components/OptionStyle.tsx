import styles from "./OptionStyle.module.css";

type OptionStyleProps = {
  nameOption: string;
  optionChoose: string;
  onClick?: () => void;
}

export default function OptionStyle({nameOption, optionChoose, onClick}: OptionStyleProps) {
  return (
    <div className={styles.optionStyle}>
      <h4>{nameOption}</h4>
      <p onClick={onClick}>{optionChoose}</p>
      <i onClick={onClick} className={`fa-solid fa-chevron-up ${styles.chevronUp}`}></i>
      <i onClick={onClick} className={`fa-solid fa-chevron-down ${styles.chevronDown}`}></i>
    </div>
  );
}
