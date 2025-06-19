import AccountMenu from "./components/Account/AccountMenu";
import PseudoMenu from "./components/Pseudo/PseudoMenu";
import StyleMenu from "./components/Style/StyleMenu";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h2>Options</h2>
            <PseudoMenu />
            <StyleMenu />
            <AccountMenu />
        </div>
    )
}