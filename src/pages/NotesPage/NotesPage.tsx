import AddButton from "../../components/Add Button/AddButton";
import Menu from "../../components/Menu/Menu";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import NotesContainer from "../../components/Notes Container/NotesContainer";
import { useModal } from "../../contexts/Modal/useModal";
import styles from "./NotesPage.module.css";

export default function NotesPage() {
  const { menu, handleCreateNotes } = useModal();

  return (
    <main className={styles.notesPage}>
      <NotesContainer/>
      <AddButton onClick={handleCreateNotes}/>
      <NavigationBar />
      {menu && <Menu />}
    </main>
  );
}
