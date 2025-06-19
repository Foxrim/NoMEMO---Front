import { useModal } from "../../contexts/Modal/useModal";
import AccountMenu from "./components/Account/AccountMenu";
import ConfidentMenu from "./components/Confident/ConfidentMenu";
import PseudoMenu from "./components/Pseudo/PseudoMenu";
import StyleMenu from "./components/Style/StyleMenu";
import styles from "./Menu.module.css";

export default function Menu() {
  const { handleMenu } = useModal();

  return (
    <div className={styles.menu}>
      <i
        onClick={handleMenu}
        className={`fa-solid fa-chevron-left ${styles.exitOption}`}
      ></i>
      <h2>Options</h2>
      <PseudoMenu />
      <StyleMenu />
      <AccountMenu />
      <ConfidentMenu />
      <button>Déconnection</button>
      <p className={styles.deleteAccount}>Supprimer le compte</p>
    </div>
  );
}
