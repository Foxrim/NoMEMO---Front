import { useModal } from "../../../../contexts/Modal/useModal";
import ConfirmModal from "../../../Modals/ConfirmModal/ConfirmModal";
import useEmail from "../../hook/email";
import usePassword from "../../hook/password";
import styles from "./AccountMenu.module.css";
import AccountDisplay from "./components/AccountDisplay";

export default function AccountMenu() {
  const {
    updateEmail,
    handleEmail,
    handleEmailClose,
    updatePassword,
    handlePassword,
    handlePasswordClose,
  } = useModal();
  const { fetchUpdateEmail } = useEmail();
  const { fetchUpdatePassword } = usePassword();

  return (
    <>
      <div className={styles.accountMenu}>
        <h3>Compte</h3>
        <div className={styles.accountContainer}>
          <AccountDisplay nameOption={"Email"} onClick={handleEmail} />
          <AccountDisplay nameOption={"Mot de passe"} onClick={handlePassword} />
        </div>
      </div>

      {updateEmail && (
        <ConfirmModal
          children={"Voulez vous changer d'email ?"}
          action={"Modifier"}
          onClickNo={handleEmailClose}
          onClickYes={fetchUpdateEmail}
        />
      )}

      {updatePassword && (
        <ConfirmModal
          children={"Voulez vous changer de mot de passe ?"}
          action={"Modifier"}
          onClickNo={handlePasswordClose}
          onClickYes={fetchUpdatePassword}
        />
      )}
    </>
  );
}
