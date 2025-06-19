import styles from "./AccountDisplay.module.css";

type AccountDisplayProps = {
    nameOption: string;
    onClick?: () => void;
}

export default function AccountDisplay({nameOption, onClick}: AccountDisplayProps) {
    return (
        <div className={styles.accountDisplay}>
            <h4>{nameOption}</h4>
            <i onClick={onClick} className="fa-solid fa-pen-to-square"></i>
        </div>
    )
}