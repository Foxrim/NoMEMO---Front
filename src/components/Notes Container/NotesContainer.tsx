import { useModal } from "../../contexts/Modal/useModal";
import FormModal from "../Modals/Form Modal/FormModal";
import Notes from "./components/Notes/Notes";
import styles from "./NotesContainer.module.css";

export default function NotesContainer() {
    const { notes } = useModal();

  return (
    <div className={styles.notesContainer}>
      <h2>Notes</h2>
      <p className={styles.zeroNotes}>Aucune note ajoutée</p>
      <Notes />

        {notes && (
            <FormModal />
        )}
    </div>
  );
}
