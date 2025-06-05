import styles from "./TextInput.module.css";

type TextProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: React.HTMLInputTypeAttribute;
    value: string;
}

export default function TextInput({ type, value, ...props }: TextProps) {
    return (
        <>
            <input className={styles.text} value={value} type={type} {...props}></input>
        </>
    )
}