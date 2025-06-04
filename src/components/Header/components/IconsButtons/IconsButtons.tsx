import styles from "./IconsButtons.module.css";

type IconsButtonsProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function IconsButtons({ children, onClick }: IconsButtonsProps) {
    return (
        <button onClick={onClick} className={styles.iconsButtons}>
            {children}
        </button>
    )
}