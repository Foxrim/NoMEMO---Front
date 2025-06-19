import styles from "./ConfidentMenu.module.css";

export default function ConfidentMenu() {
    return (
        <div className={styles.confidentMenu}>
            <h3>Confidentalité</h3>
            <div>
                <h4>Politique de confidentalité</h4>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
}