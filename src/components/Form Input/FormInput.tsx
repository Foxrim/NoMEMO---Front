import styles from './FormInput.module.css';

type FormInputProps = {
    placeholder?: string;
    className?: string;
}

export default function FormInput({ placeholder, className } : FormInputProps) {
    return (
        <input className={`${styles.formInput} ${className}`} type="text" placeholder={placeholder} />
    )
}