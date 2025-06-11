import Account from "../../components/Account/Account";
import AddNote from "../../components/AddNote/AddNote";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import { useHeader } from "../../components/Header/context/useHeader";
import Notes from "../../components/Notes/Notes";
import styles from "./Home.module.css";
import useHomeHook from "./hook/HomeHook";

export default function Home() {
  const { modalAccount } = useHeader();
  const { notes, addNoteModal, handleNoteModal } = useHomeHook();
  console.log(notes)
  return (
    <section className={styles.home}>
      <Header />
      {modalAccount && <Account />}

      {notes.length !== 0 ? (
        <>
          {notes.map((note) => (
            <Notes key={note.nameNote} isDone={String(note.isDone)} >
              {note.nameNote}
            </Notes>
          ))}
        </>
      ) : (
        <Buttons className={styles.addButton} onClick={handleNoteModal}>
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      )}
      {addNoteModal && <AddNote handleNoteModal={handleNoteModal} />}
    </section>
  );
}
