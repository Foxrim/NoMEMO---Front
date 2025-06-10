import Buttons from "../../../Buttons/Buttons";
import ConfirmModal from "../../../Confirm-modal/ConfirmModal";
import styles from "../../Account.module.css";
import { useAccount } from "../../context/useAccount";
import useUpdateEmail from "../../hook/updateEmail";

export default function EmailAccount() {
    const { handleEmailModal, emailModal } = useAccount();
    const { newEmail } = useUpdateEmail();

    return (
        <>
        <Buttons
          className={styles.emailAccount}
          children={"Modifier l'email"}
          onClick={handleEmailModal}
        />
        { emailModal && (
            <ConfirmModal onClick={handleEmailModal} onClickYes={newEmail} onClickNo={handleEmailModal}>
                {"Voulez vous changer d'email ?"}
            </ConfirmModal>
        )}
        </>
    )
}