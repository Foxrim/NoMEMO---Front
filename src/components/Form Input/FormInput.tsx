import styles from "./FormInput.module.css";

type FormInputProps = {
  placeholder?: string;
  className?: string;
  icon?: string;
};

export default function FormInput({ placeholder, className, icon }: FormInputProps) {
  return (
    <div className={`${styles.formInput} ${className}`}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
      <i className={icon}></i>
    </div>
  );
}
