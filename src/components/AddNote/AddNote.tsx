import TextInput from "../Inputs/Text/TextInput";
import styles from "./AddNote.module.css";

export default function AddNote() {
  return (
    <div className={styles.addNote}>
      <div className={styles.addNoteModal}>
        <i
          className={`fa-solid fa-xmark ${styles.closeAddNote}`}
        ></i>
        <TextInput value={'text'} />
      </div>
    </div>
  );
}
