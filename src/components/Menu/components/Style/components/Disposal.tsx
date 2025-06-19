import styles from "./Disposal.module.css";

type DisposalProps = {
  nameOption: string;
  optionChoose: string;
  onClick?: () => void;
}

export default function Disposal({nameOption, optionChoose, onClick}: DisposalProps) {
  return (
    <div className={styles.disposal}>
      <h4>{nameOption}</h4>
      <p>{optionChoose}</p>
      <i onClick={onClick} className={`fa-solid fa-chevron-up ${styles.chevronUp}`}></i>
      <i onClick={onClick} className={`fa-solid fa-chevron-down ${styles.chevronDown}`}></i>
    </div>
  );
}
