import styles from "./Title.module.css"

export default function Title() {
  return (
    <h1 className={styles.title}>
      <span className={styles.titleNo}>No</span><span className={styles.titleMemo}>MEMO</span>
    </h1>
  );
}
