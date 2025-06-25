import styles from "./NotesContainer.module.css";

export default function NotesContainer() {
    return (
        <div className={styles.notesContainer}>
            <h2>Notes</h2>
            <p>Aucune note ajoutée</p>
        </div>
    )
}