import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./AddCatNote.module.css";

type AddCatNoteProps = {
    handleModalAdd: () => void;
    handleAddNote: () => void;
    handleAddCategory: () => void;
}

export default function AddCatNote({ handleModalAdd, handleAddNote, handleAddCategory }: AddCatNoteProps) {

  const switchModalNotes = () => {
    handleModalAdd();
    handleAddNote();
  }

  const switchModalCategories = () => {
    handleModalAdd();
    handleAddCategory();
  }

  return (
    <div className={styles.addCatNote}>
      <div className={styles.addCatNoteModal}>
        <Close className={styles.closeAddCatNote} onClick={handleModalAdd} />
        <h2>Ajouts</h2>
        <Buttons className={styles.addNewNote} onClick={switchModalNotes}>Nouvelle note</Buttons>
        <Buttons className={styles.addNewCategorie} onClick={switchModalCategories}>Nouvelle catégorie</Buttons>
      </div>
    </div>
  );
}
