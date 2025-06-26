import styles from "./Notes.module.css";

type NotesProps = {
  nameNote?: string;
  comment?: string;
  status?: string;
}

export default function Notes({ nameNote, comment, status } : NotesProps) {
  return (
      <div className={styles.notes}>
        <h3>{nameNote !== null ? nameNote : "Sans titre"}</h3>
        <p>{comment !== null ? comment : 'Sans texte'}</p>
        <hr className={styles.hrNotes} />
        {status === 'finished' ? (
          <i className={`fa-solid fa-circle-check ${styles.statusIcon} ${styles.statusFinished}`}></i>
        )  : status === 'inProgress' ? (
          <i className={`fa-solid fa-clock-rotate-left ${styles.statusIcon} ${styles.statusInProgress}`}></i>
        ) : (
          ""
        )}
      </div>
  );
}
