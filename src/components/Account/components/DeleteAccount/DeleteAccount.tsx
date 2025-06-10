import ConfirmModal from "../../../Confirm-modal/ConfirmModal";
import { useAccount } from "../../context/useAccount";

export default function DeleteAccount() {
  const { handleDeleteAccountModal, deleteAccountModal } = useAccount();

  return (
    <>
      <a onClick={handleDeleteAccountModal}>Supprimer le compte</a>
      {deleteAccountModal && (
        <ConfirmModal onClick={handleDeleteAccountModal} onClickYes={handleDeleteAccountModal} onClickNo={handleDeleteAccountModal}>
          {"Voulez vous supprimer votre compte définitivement ?"}
        </ConfirmModal>
      )}
    </>
  );
}
