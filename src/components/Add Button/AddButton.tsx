import styles from "./AddButton.module.css";

type AddButtonProps = {
    className?: string;
}

export default function AddButton({ className }: AddButtonProps) {
    return (
        <button className={`${styles.addButton} ${className}`}><i className="fa-solid fa-plus"></i></button>
    )
}