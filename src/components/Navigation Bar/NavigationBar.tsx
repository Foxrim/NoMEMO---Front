import styles from "./NavigationBar.module.css";
import CategoriesNav from "./components/Categories/CategoriesNav";
import NotesNav from "./components/Notes/NotesNav";
import SearchNav from "./components/Search/SearchNav";
import MenuNav from "./components/Menu/MenuNav";
import { useModal } from "../../pages/NotesPage/Modal/useModal";

export default function NavigationBar() {

  const { handleMenu } = useModal();

  return (
    <footer className={styles.navigationBar}>
      <SearchNav className={styles.searchNav} />

      <hr className={styles.fristHrNav} />

      <NotesNav className={styles.notesNav} />
      <CategoriesNav className={styles.categoriesNav} />

      <hr className={styles.secondHrNav} />

      <MenuNav className={styles.menuNav} onClick={handleMenu} />
    </footer>
  );
}
