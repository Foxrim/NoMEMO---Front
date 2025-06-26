import { useModal } from "../../contexts/Modal/useModal";
import { useNotes } from "../../contexts/Notes/useNotes";
import CreateNotes from "./components/Create/CreateNotes";
import Notes from "./components/Notes/Notes";
import UpdateNotes from "./components/Update/UpdateNotes";
import useFormNotes from "./hook/formNotes";
import styles from "./NotesContainer.module.css";

export default function NotesContainer() {
  const { createNotes, updateNotes } = useModal();
  const { notes } = useNotes();

  const { selectedNotes } = useFormNotes();

  return (
    <div className={styles.notesContainer}>
      <h2>Notes</h2>
      {notes.length !== 0 ? (
        notes.map((note, index) => (
          <Notes
            key={note.id}
            nameNote={note.nameNote}
            comment={note.comment}
            status={note.status}
            onClick={() => selectedNotes(index)}
          />
        ))
      ) : (
        <p className={styles.zeroNotes}>Aucune note ajoutée</p>
      )}

      {createNotes && <CreateNotes />}
      {updateNotes && <UpdateNotes />}
    </div>
  );
}
