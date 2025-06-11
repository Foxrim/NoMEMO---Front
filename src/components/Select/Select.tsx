import styles from "./Select.module.css";

type SelectProps = {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
  option: React.ReactNode;
  className?: string;
  classNameSelect?: string;
};

export default function Select({
  value,
  onChange,
  children,
  option,
  className,
  classNameSelect
}: SelectProps) {
  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      <select
        className={`${styles.select} ${classNameSelect}`}
        value={value}
        onChange={onChange}
      >
        <option unselectable="on">{option}</option>
        {children}
      </select>
      <i className={`fa-solid fa-caret-down ${styles.selectArrow}`}></i>
    </div>
  );
}
