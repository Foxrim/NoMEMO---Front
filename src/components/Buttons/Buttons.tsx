import styles from "./Buttons.module.css";

type ButtonsProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
};

export default function Buttons({ type, children } : ButtonsProps) {
    return (
        <>
        <button className={styles.buttons} type={type}>{children}</button>
        </>
    )
}