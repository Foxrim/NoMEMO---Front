import { useModal } from "../../contexts/Modal/useModal";
import { useNotes } from "../../contexts/Notes/useNotes";
import CreateNotes from "./components/Create/CreateNotes";
import Notes from "./components/Notes/Notes";
import useFormNotes from "./hook/formNotes";
import styles from "./NotesContainer.module.css";

export default function NotesContainer() {
  const { createNotes } = useModal();
  const { notes } = useNotes();

  const { selectedNotes } = useFormNotes();

  return (
    <div className={styles.notesContainer}>
      <h2>Notes</h2>
      {notes.length !== 0 ? (
        notes.map((note, index) => (
          <Notes
            key={note.id}
            note={note}
            onClick={() => selectedNotes(index)}
          />
        ))
      ) : (
        <p className={styles.zeroNotes}>Aucune note ajoutée</p>
      )}

      {createNotes && <CreateNotes />}
    </div>
  );
}
