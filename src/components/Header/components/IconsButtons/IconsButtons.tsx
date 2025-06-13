import styles from "./IconsButtons.module.css";

type IconsButtonsProps = {
    children: React.ReactNode;
    onClick?: () => void;
    onClickEvent?: (e: React.FormEvent) => Promise<void>;
    className?: string;
}

export default function IconsButtons({ children, onClick, onClickEvent, className }: IconsButtonsProps) {
    return (
        <button onClick={onClick || onClickEvent} className={`${styles.iconsButtons} ${className}`}>
            {children}
        </button>
    )
}