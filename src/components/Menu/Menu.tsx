import PseudoMenu from "./components/Pseudo/PseudoMenu";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h2>Options</h2>
            <PseudoMenu className={styles.pseudoMenu}/>
        </div>
    )
}