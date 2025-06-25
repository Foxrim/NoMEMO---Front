import ConfirmModal from "../../../Modals/ConfirmModal/ConfirmModal";
import styles from "./AccountMenu.module.css";
import AccountDisplay from "./components/AccountDisplay";

export default function AccountMenu() {
    return (
        <>
        <div className={styles.accountMenu}>
            <h3>Compte</h3>
            <div className={styles.accountContainer}>
                <AccountDisplay nameOption={'Email'} />
                <AccountDisplay nameOption={'Mot de passe'} />
            </div>
        </div>

        <ConfirmModal children={"Voulez vous changer d'email ?"} action={"Modifier"} />

        </>
    )
}