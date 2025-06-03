import styles from "./EmailInput.module.css";
import React from "react";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type: React.HTMLInputTypeAttribute;
};

export default function EmailInput({ type, ...props } : EmailInputProps) {
    return (
        <>
            <input className={styles.emailInput} type={type} {...props}/>
        </>
    )
}