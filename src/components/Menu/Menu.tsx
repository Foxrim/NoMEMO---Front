import { useModal } from "../../contexts/Modal/useModal";
import Buttons from "../Buttons/Buttons";
import ConfirmModal from "../Modals/ConfirmModal/ConfirmModal";
import AccountMenu from "./components/Account/AccountMenu";
import ConfidentMenu from "./components/Confident/ConfidentMenu";
import StyleMenu from "./components/Style/StyleMenu";
import useLogout from "./hook/logout";
import styles from "./Menu.module.css";

export default function Menu() {
  const { handleMenu, handleDeleteAccount, deleteAccount, handleDeleteAccountClose } = useModal();
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
      <p className={styles.deleteAccount} onClick={handleDeleteAccount}>Supprimer le compte</p>

      {deleteAccount && (
        <ConfirmModal children={'Voulez-vous supprimer votre compte ?'} classNameYes={styles.deleteAccountButtonYes} action={"Supprimer"} onClickNo={handleDeleteAccountClose}/>
      )}
    </div>
  );
}
