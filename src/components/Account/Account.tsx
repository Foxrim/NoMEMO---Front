import IconsButtons from "../Header/components/IconsButtons/IconsButtons";
import styles from "./Account.module.css";
import useUpdatePseudo from "./hook/updatePseudo";
import { useHeader } from "../Header/context/useHeader";
import PseudoAccount from "./components/Pseudo/PseudoAccount";
import EmailAccount from "./components/Email/EmailAccount";
import PasswordAccount from "./components/Password/PasswordAccount";
import DisconnectAccount from "./components/Disconnect/DisconnectAccount";
import DeleteAccount from "./components/DeleteAccount/DeleteAccount";
import Close from "../Close/Close";

export default function Account() {
  const { handleModalAccount } = useHeader();
  const {
    isUpdatePseudo,
    handleUpdatePseudo,
    handleCancelUpdate,
    handleChangePseudo,
    updatePseudo,
    tempPseudo,
    inputRef,
  } = useUpdatePseudo();

  return (
    <div className={styles.account}>
      <div className={styles.modalAccount}>
        <div className={styles.topAccount}>
          <Close className={styles.closeAccount} onClick={handleModalAccount} />
          <h2>Compte</h2>
          <IconsButtons
            onClick={isUpdatePseudo ? handleCancelUpdate : handleUpdatePseudo}
            children={<i className="fa-solid fa-pen-to-square"></i>}
          />
        </div>
        <PseudoAccount
          isUpdatePseudo={isUpdatePseudo}
          handleChangePseudo={handleChangePseudo}
          updatePseudo={updatePseudo}
          tempPseudo={tempPseudo}
          inputRef={inputRef}
        />
        <EmailAccount />
        <PasswordAccount />
        <DisconnectAccount />
        <DeleteAccount />
      </div>
    </div>
  );
}
