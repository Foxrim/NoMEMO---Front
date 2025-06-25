import AddButton from "../../components/Add Button/AddButton";
import Menu from "../../components/Menu/Menu";
import FormModal from "../../components/Modals/Form Modal/FormModal";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import NotesContainer from "../../components/Notes Container/NotesContainer";
import { useModal } from "../../contexts/Modal/useModal";
import styles from "./NotesPage.module.css";

export default function NotesPage() {
  const { menu } = useModal();

  return (
    <main className={styles.notesPage}>
      <NotesContainer/>
      <FormModal/>
      <AddButton/>
      <NavigationBar />
      {menu && <Menu />}
    </main>
  );
}
