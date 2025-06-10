import styles from "./IconAccount.module.css";

type IconAccount = {
    onClick: () => void;
}

export default function IconAccount({ onClick }: IconAccount) {
    return (
        <button onClick={onClick} className={styles.iconAccount}>
            <i className="fa-regular fa-user"></i>
        </button>
    )
}