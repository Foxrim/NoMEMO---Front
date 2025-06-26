import styles from "./FormModal.module.css";

type FormTypeProps = {
    children?: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => Promise<void>; 
    className?: string;
    update?: boolean;
}

export default function FormModal({children, onSubmit, className, update} : FormTypeProps) {
    return (
        <form className={styles.formModal} onSubmit={onSubmit}>
            <button type="submit" className="fa-solid fa-chevron-left"></button>
            {update ? (
                <button type="submit" className={`fa-solid fa-check ${styles.optionFormModal}`}></button>
            ): (
                <button type="button" className={`fa-solid fa-ellipsis-vertical ${styles.optionFormModal}`}></button>
            )}
            <div className={`${styles.formContainer} ${className}`}>
                {children}
            </div>
        </form>
    )
}