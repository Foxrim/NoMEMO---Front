import styles from "./PseudoMenu.module.css";

export default function PseudoMenu() {
  return (
    <div className={styles.pseudoMenu}>
      <h3>Pseudo</h3>
      <div>
        <input type="text" name="" id="" />
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  );
}
