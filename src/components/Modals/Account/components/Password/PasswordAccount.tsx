import Buttons from "../../../Buttons/Buttons";
import ConfirmModal from "../../../ConfirmModal/ConfirmModal";
import styles from "../../Account.module.css";
import { useAccount } from "../../context/useAccount";
import useUpdatePassword from "../../hook/updatePassword";

export default function PasswordAccount() {
  const { newPassword } = useUpdatePassword();
  const { handlePasswordModal, passwordModal } = useAccount();

  return (
    <>
      <Buttons
        className={styles.passwordAccount}
        children={"Modifier le mot de passe"}
        onClick={handlePasswordModal}
      />
      {passwordModal && (
        <ConfirmModal
          onClick={handlePasswordModal}
          onClickYes={newPassword}
          onClickNo={handlePasswordModal}
        >
          {"Voulez vous modifier votre mot de passe ?"}
        </ConfirmModal>
      )}
    </>
  );
}
