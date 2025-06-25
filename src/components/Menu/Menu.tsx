import { useModal } from "../../contexts/Modal/useModal";
import Buttons from "../Buttons/Buttons";
import AccountMenu from "./components/Account/AccountMenu";
import ConfidentMenu from "./components/Confident/ConfidentMenu";
import StyleMenu from "./components/Style/StyleMenu";
import useLogout from "./hook/logout";
import styles from "./Menu.module.css";

export default function Menu() {
  const { handleMenu } = useModal();
  const { handleLogout } = useLogout();

  return (
    <div className={styles.menu}>
      <i
        onClick={handleMenu}
        className={`fa-solid fa-chevron-left ${styles.exitOption}`}
      ></i>
      <h2>Options</h2>
      <StyleMenu />
      <AccountMenu />
      <ConfidentMenu />
      <Buttons onClick={handleLogout}>Déconnection</Buttons>
      <p className={styles.deleteAccount}>Supprimer le compte</p>
    </div>
  );
}
