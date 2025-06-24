import styles from "./Account.module.css";
import { useHeader } from "../../Header/context/useHeader";
import EmailAccount from "./components/Email/EmailAccount";
import PasswordAccount from "./components/Password/PasswordAccount";
import DisconnectAccount from "./components/Disconnect/DisconnectAccount";
import DeleteAccount from "./components/DeleteAccount/DeleteAccount";
import Close from "../../Close/Close";

export default function Account() {
  const { handleModalAccount } = useHeader();

  return (
    <div className={styles.account}>
      <div className={styles.modalAccount}>
        <div className={styles.topAccount}>
          <Close className={styles.closeAccount} onClick={handleModalAccount} />
          <h2>Compte</h2>
        </div>
        <EmailAccount />
        <PasswordAccount />
        <DisconnectAccount />
        <DeleteAccount />
      </div>
    </div>
  );
}
