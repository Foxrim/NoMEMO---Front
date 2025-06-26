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
      <p className={styles.zeroNotes}>Aucune note ajoutée</p>
      {notes.length !== 0 && (notes.map((note) => (
        <>
        <p>{note.comment}</p>
        <Notes nameNote={note.nameNotes} comment={note.comment} />
        </>
      )))}

      {createNotes && <CreateNotes />}
    </div>
  );
}
