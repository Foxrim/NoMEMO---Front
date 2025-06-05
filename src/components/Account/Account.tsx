import Buttons from "../Buttons/Buttons";
import IconsButtons from "../Header/components/IconsButtons/IconsButtons";
import styles from "./Account.module.css";
import TextInput from "../Inputs/Text/TextInput";
import useHandleLogout from "./hook/logout";
import useUpdatePseudo from "./hook/updatePseudo";
import useUpdatePassword from "./hook/updatePassword";
import { useHeader } from "../Header/context/useHeader";

export default function Account() {
  const { handleModalAccount } = useHeader();
  const { handleLogout } = useHandleLogout();
  const { isUpdatePseudo, handleUpdatePseudo, handleChangePseudo, updatePseudo, tempPseudo, handleCancelUpdate, inputRef } = useUpdatePseudo();
  const { newPassword } = useUpdatePassword();

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
            onClick={isUpdatePseudo ? handleCancelUpdate : handleUpdatePseudo}
            children={<i className="fa-solid fa-pen-to-square"></i>}
          />
        </div>
        {isUpdatePseudo ? (
          <TextInput
          ref={inputRef}
          className={`${styles.pseudoAccount} ${styles.pseudoAccountUpdate}`}
          value={tempPseudo}
          onChange={handleChangePseudo}
          name="pseudo"
          spellCheck={false}
          />
        ) : (
          <TextInput
          className={styles.pseudoAccount}
          value={tempPseudo}
          readOnly
          />
        )}
        {isUpdatePseudo && (
          <Buttons
            className={styles.pseudoValidateAccount}
            children={"Valider la modification"}
            onClick={updatePseudo}
            type="submit"
            />
          )}
        <Buttons
          className={styles.emailAccount}
          children={"Modifier l'email"}
        />
        <Buttons
          className={styles.passwordAccount}
          children={"Modifier le mot de passe"}
          onClick={newPassword}
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
