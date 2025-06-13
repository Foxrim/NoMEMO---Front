import styles from "./TextInput.module.css";

type TextProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: React.HTMLInputTypeAttribute;
    value?: string;
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
}

export default function TextInput({ type, value, className, ref,  ...props }: TextProps) {
    return (
        <>
            <input className={`${className} ${styles.textInput}`} ref={ref} value={value} type={type} {...props}></input>
        </>
    )
}