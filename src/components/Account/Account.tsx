import Buttons from "../Buttons/Buttons";
import IconsButtons from "../Header/components/IconsButtons/IconsButtons";
import styles from "./Account.module.css";
import TextInput from "../Inputs/Text/TextInput";
import useHandleLogout from "./hook/logout";
import useUpdatePseudo from "./hook/updatePseudo";
import { useAccount } from "./context/useAccount";
import { useHeader } from "../Header/context/useHeader";

export default function Account() {
  const { user } = useAccount();
  const { handleModalAccount } = useHeader();
  const { handleLogout } = useHandleLogout();
  const pseudo = localStorage.getItem("userName");
  const { isUpdatePseudo, handleUpdatePseudo } = useUpdatePseudo();

  return (
    <div className={styles.account}>
      <div className={styles.modalAccount}>
        <div className={styles.topAccount}>
          <i
            className={`fa-solid fa-xmark ${styles.closeAccount}`}
            onClick={handleModalAccount}
          ></i>
          <h2>Compte</h2>
          <IconsButtons
            onClick={handleUpdatePseudo}
            children={<i className="fa-solid fa-pen-to-square"></i>}
          />
        </div>
        {isUpdatePseudo ? (
            <TextInput
            className={styles.pseudoAccount}
            value={user ? user?.pseudo ?? pseudo : ''}
            />
        ) : (
            <TextInput
            className={styles.pseudoAccount}
            value={user ? user?.pseudo : pseudo ?? ''}
            readOnly
            />
        )}
        {isUpdatePseudo && (
          <Buttons
            className={styles.pseudoValidateAccount}
            children={"Valider la modification"}
          />
        )}
        <Buttons
          className={styles.emailAccount}
          children={"Modifier l'email"}
        />
        <Buttons
          className={styles.passwordAccount}
          children={"Modifier le mot de passe"}
        />
        <Buttons
          className={styles.logoutAccount}
          children={"Déconnection"}
          onClick={handleLogout}
        />
        <a href="">Supprimer le compte</a>
      </div>
    </div>
  );
}
