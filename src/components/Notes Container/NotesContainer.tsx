import { useModal } from "../../contexts/Modal/useModal";
import { useNotes } from "../../contexts/Notes/useNotes";
import CreateNotes from "./components/Create/CreateNotes";
import Notes from "./components/Notes/Notes";
import styles from "./NotesContainer.module.css";

export default function NotesContainer() {
  const { createNotes } = useModal();
  const { notes } = useNotes();

  return (
    <div className={styles.notesContainer}>
      <h2>Notes</h2>
      {notes.length !== 0 ? (
        notes.map((note) => (
          <Notes nameNote={note.nameNote} comment={note.comment} status={note.status} />
        ))
      ) : (
        <p className={styles.zeroNotes}>Aucune note ajoutée</p>
      )}

      {createNotes && <CreateNotes />}
    </div>
  );
}
