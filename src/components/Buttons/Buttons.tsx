import styles from "./Buttons.module.css";

type ButtonsProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export default function Buttons({ type, children, className, onClick } : ButtonsProps) {
    return (
        <>
        <button onClick={onClick} className={`${className} ${styles.buttons}`} type={type}>{children}</button>
        </>
    )
}