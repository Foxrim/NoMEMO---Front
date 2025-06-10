import Buttons from "../../../Buttons/Buttons";
import ConfirmModal from "../../../Confirm-modal/ConfirmModal";
import styles from "../../Account.module.css";
import { useAccount } from "../../context/useAccount";

export default function EmailAccount() {
    const { handleEmailModal, emailModal } = useAccount();

    return (
        <>
        <Buttons
          className={styles.emailAccount}
          children={"Modifier l'email"}
          onClick={handleEmailModal}
        />
        { emailModal && (
            <ConfirmModal onClick={handleEmailModal} onClickYes={handleEmailModal} onClickNo={handleEmailModal}>
                {"Voulez vous changer d'email ?"}
            </ConfirmModal>
        )}
        </>
    )
}