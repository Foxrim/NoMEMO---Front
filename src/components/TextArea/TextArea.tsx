import styles from "./TextArea.module.css";

type TextAreaProps = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
};

export default function TextArea({
  className,
  value,
  onChange,
  placeholder,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className={`${styles.textArea} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
