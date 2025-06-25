import styles from "./Notes.module.css";

export default function Notes() {
  return (
      <div className={styles.notes}>
        <h3>Titre</h3>
        <p>Commentaire</p>
        <hr className={styles.hrNotes} />
      </div>
  );
}
