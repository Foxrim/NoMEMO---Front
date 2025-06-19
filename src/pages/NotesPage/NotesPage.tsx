import Menu from "../../components/Menu/Menu";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import styles from "./NotesPage.module.css";

export default function NotesPage() {
  return (
    <main className={styles.notesPage}>
      <NavigationBar />
      <Menu />
    </main>
  );
}
