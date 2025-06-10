import ConfirmModal from "../../../Confirm-modal/ConfirmModal";
import { useAccount } from "../../context/useAccount";
import useDeleteAccount from "../../hook/deleteAccount";

export default function DeleteAccount() {
  const { handleDeleteAccountModal, deleteAccountModal } = useAccount();
  const { destroyAccount }  = useDeleteAccount();

  return (
    <>
      <a onClick={handleDeleteAccountModal}>Supprimer le compte</a>
      {deleteAccountModal && (
        <ConfirmModal onClick={handleDeleteAccountModal} onClickYes={destroyAccount} onClickNo={handleDeleteAccountModal}>
          {"Voulez vous supprimer votre compte définitivement ?"}
        </ConfirmModal>
      )}
    </>
  );
}
