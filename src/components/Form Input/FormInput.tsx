import styles from "./FormInput.module.css";

type FormInputProps = {
  placeholder?: string;
  className?: string;
  icon?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({ placeholder, className, icon, value, onChange }: FormInputProps) {
  return (
    <div className={`${styles.formInput} ${className}`}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <i className={icon}></i>
    </div>
  );
}
