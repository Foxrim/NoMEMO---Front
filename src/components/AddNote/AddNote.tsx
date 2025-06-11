import Buttons from "../Buttons/Buttons";
import TextInput from "../Inputs/Text/TextInput";
import RadioDone from "../RadioDone/RadioDone";
import styles from "./AddNote.module.css";

export default function AddNote() {
  return (
    <div className={styles.addNote}>
      <form className={styles.addNoteModal}>
        <i
          className={`fa-solid fa-xmark ${styles.closeAddNote}`}
        ></i>
        <h2>Ajouter une note</h2>
        <TextInput className={styles.itemsForm} type="text" value="text" />
          <RadioDone />
        <textarea/>

        <TextInput className={styles.itemsForm} type="text" value="text" />
        <TextInput className={styles.itemsForm} type="text" value="text" />
        <Buttons className={styles.itemsForm} type="submit" >
           Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      </form>
    </div>
  );
}
