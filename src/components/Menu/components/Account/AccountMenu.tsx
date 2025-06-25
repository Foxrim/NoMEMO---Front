import { useModal } from "../../../../contexts/Modal/useModal";
import ConfirmModal from "../../../Modals/ConfirmModal/ConfirmModal";
import useEmail from "../../hook/email";
import styles from "./AccountMenu.module.css";
import AccountDisplay from "./components/AccountDisplay";

export default function AccountMenu() {
  const { updateEmail, handleEmail, handleEmailClose } = useModal();
  const { fetchUpdateEmail } = useEmail();

  return (
    <>
      <div className={styles.accountMenu}>
        <h3>Compte</h3>
        <div className={styles.accountContainer}>
          <AccountDisplay nameOption={"Email"} onClick={handleEmail} />
          <AccountDisplay nameOption={"Mot de passe"} />
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
    </>
  );
}
