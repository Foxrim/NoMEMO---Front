import Menu from "../../components/Menu/Menu";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import { useModal } from "../../contexts/Modal/useModal";
import styles from "./NotesPage.module.css";

export default function NotesPage() {
  const { menu } = useModal();

  return (
    <main className={styles.notesPage}>
      <NavigationBar />
      {menu && <Menu />}
    </main>
  );
}
