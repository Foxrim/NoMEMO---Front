import styles from "./Buttons.module.css";

type ButtonsProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    className?: string;
};

export default function Buttons({ type, children, className } : ButtonsProps) {
    return (
        <>
        <button className={`${className} ${styles.buttons}`} type={type}>{children}</button>
        </>
    )
}