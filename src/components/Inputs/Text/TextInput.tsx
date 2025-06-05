import styles from "./TextInput.module.css";

type TextProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: React.HTMLInputTypeAttribute;
    value: string;
    className?: string;
}

export default function TextInput({ type, value, className, ...props }: TextProps) {
    return (
        <>
            <input className={`${className} ${styles.textInput}`} value={value} type={type} {...props}></input>
        </>
    )
}