import styles from "./AddButton.module.css";

type AddButtonProps = {
    className?: string;
    onClick?: () => void;
}

export default function AddButton({ className, onClick }: AddButtonProps) {
    return (
        <button onClick={onClick} className={`${styles.addButton} ${className}`}><i className="fa-solid fa-plus"></i></button>
    )
}