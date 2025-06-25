import styles from "./FormModal.module.css";

type FormTypeProps = {
    exit?: () => void;
    children?: React.ReactNode;
    onSubmit?: () => void; 
}

export default function FormModal({exit, children, onSubmit} : FormTypeProps) {
    return (
        <form className={styles.formModal} onSubmit={onSubmit}>
            <button type="submit" onClick={exit} className="fa-solid fa-chevron-left"></button>
            <button type="submit" className={`fa-solid fa-ellipsis-vertical ${styles.optionFormModal}`}></button>
            <div className={styles.formContainer}>
                {children}
            </div>
        </form>
    )
}