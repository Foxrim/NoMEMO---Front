import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./AddCatNote.module.css";

type AddCatNoteProps = {
    handleModalAdd: () => void;
    handleChangeToAddNote: () => void;
    handleChangeToAddCategorie: () => void;
}

export default function AddCatNote({ handleModalAdd, handleChangeToAddNote, handleChangeToAddCategorie }: AddCatNoteProps) {

  return (
    <div className={styles.addCatNote}>
      <div className={styles.addCatNoteModal}>
        <Close className={styles.closeAddCatNote} onClick={handleModalAdd} />
        <h2>Ajouts</h2>
        <Buttons className={styles.addNewNote} onClick={handleChangeToAddNote}>Nouvelle note</Buttons>
        <Buttons className={styles.addNewCategorie} onClick={handleChangeToAddCategorie}>Nouvelle catégorie</Buttons>
      </div>
    </div>
  );
}
