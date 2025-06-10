import Account from "../../components/Account/Account";
import AddNote from "../../components/AddNote/AddNote";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import { useHeader } from "../../components/Header/context/useHeader";
import styles from "./Home.module.css";
import useHomeHook from "./hook/HomeHook";

export default function Home() {
  const { modalAccount } = useHeader();
  const { notes, addNoteModal, handleNoteModal } = useHomeHook();

  return (
    <section className={styles.home}>
      <Header />
      {modalAccount && <Account />}

      {notes.length > 0 ? (
        <>
          {notes.map((note) => (
            <div key={note.nameNote}>
              <p>{note.nameNote}</p>
              <p>{note.isDone.done ?? note.isDone.notDone}</p>
              <p>{new Date(note.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </>
      ) : (
        <Buttons className={styles.addButton} onClick={handleNoteModal}>
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      )}
      {addNoteModal && <AddNote />}
    </section>
  );
}
