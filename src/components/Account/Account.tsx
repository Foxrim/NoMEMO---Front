import Buttons from "../Buttons/Buttons";
import IconsButtons from "../Header/components/IconsButtons/IconsButtons";
import styles from "./Account.module.css";
import TextInput from "../Inputs/Text/TextInput";
import { useHandleLogout } from "./hook/logout";
import { useAccount } from "./context/useAccount";

export default function Account() {
  const { user } = useAccount();
  const pseudo = localStorage.getItem("userName");

  return (
    <div className={styles.account}>
      <div className={styles.modalAccount}>
        <div className={styles.topAccount}>
          <i className={`fa-solid fa-xmark ${styles.closeAccount}`}></i>
          <h2>Compte</h2>
          <IconsButtons
            children={<i className="fa-solid fa-pen-to-square"></i>}
          />
        </div>
        <TextInput className={styles.pseudoAccount} value={user ? user?.pseudo : pseudo ?? ""} readOnly />
        <Buttons className={styles.pseudoValidateAccount} children={"Valider la modification"} />
        <Buttons className={styles.emailAccount} children={"Modifier l'email"} />
        <Buttons className={styles.passwordAccount} children={"Modifier le mot de passe"} />
        <Buttons className={styles.logoutAccount} children={"Déconnection"} onClick={useHandleLogout} />
        <a href="">Supprimer le compte</a>
      </div>
    </div>
  );
}
