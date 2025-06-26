import styles from "./Notes.module.css";

type NotesProps = {
  nameNote?: string;
  comment?: string;
}

export default function Notes({ nameNote, comment } : NotesProps) {
  return (
      <div className={styles.notes}>
        <h3>{nameNote}</h3>
        <p>{comment}</p>
        <hr className={styles.hrNotes} />
      </div>
  );
}
