import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./AddCatNote.module.css";

type AddCatNoteProps = {
    handleCatNoteModal: () => void;
    handleNoteModalByModal: () => void;
    handleCategorieModalByModal: () => void;
}

export default function AddCatNote({ handleCatNoteModal, handleNoteModalByModal, handleCategorieModalByModal }: AddCatNoteProps) {

  return (
    <div className={styles.addCatNote}>
      <div className={styles.addCatNoteModal}>
        <Close className={styles.closeAddCatNote} onClick={handleCatNoteModal} />
        <h2>Ajouts</h2>
        <Buttons className={styles.addNewNote} onClick={handleNoteModalByModal}>Nouvelle note</Buttons>
        <Buttons className={styles.addNewCategorie} onClick={handleCategorieModalByModal}>Nouvelle catégorie</Buttons>
      </div>
    </div>
  );
}
