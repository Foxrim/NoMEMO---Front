import Buttons from "../../../Buttons/Buttons";
import ConfirmModal from "../../../ConfirmModal/ConfirmModal";
import styles from "../../Account.module.css";
import { useAccount } from "../../context/useAccount";
import useHandleLogout from "../../hook/logout";

export default function DisconnectAccount() {
  const { handleLogout } = useHandleLogout();
  const { handleDisconnectModal, disconnectModal } = useAccount();

  return (
    <>
      <Buttons
        className={styles.logoutAccount}
        children={"Déconnection"}
        onClick={handleDisconnectModal}
      />
      {disconnectModal && (
        <ConfirmModal
          onClick={handleDisconnectModal}
          onClickYes={handleLogout}
          onClickNo={handleDisconnectModal}
        >
          {"Voulez vous vous déconnecter ?"}
        </ConfirmModal>
      )}
    </>
  );
}
