import styles from "./IconsButtons.module.css";

type IconsButtonsProps = {
    children: React.ReactNode;
}

export default function IconsButtons({ children }: IconsButtonsProps) {
    return (
        <button className={styles.iconsButtons}>
            {children}
        </button>
    )
}