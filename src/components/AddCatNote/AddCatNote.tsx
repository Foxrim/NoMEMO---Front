import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./AddCatNote.module.css";

type AddCatNoteProps = {
    handleCatNoteModal: () => void;
    handleNoteModalByModal: () => void;
}

export default function AddCatNote({ handleCatNoteModal, handleNoteModalByModal }: AddCatNoteProps) {

  return (
    <div className={styles.addCatNote}>
      <div className={styles.addCatNoteModal}>
        <Close className={styles.closeAddCatNote} onClick={handleCatNoteModal} />
        <h2>Ajouts</h2>
        <Buttons className={styles.addNewNote} onClick={handleNoteModalByModal}>Nouvelle note</Buttons>
        <Buttons className={styles.addNewCategorie}>Nouvelle catégorie</Buttons>
      </div>
    </div>
  );
}
