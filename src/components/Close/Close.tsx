import styles from "./Close.module.css";

type CloseProps = {
  onClick?: () => void;
  className: string;
};

export default function Close({ onClick, className }: CloseProps) {
  return (
    <i
      className={`fa-solid fa-xmark ${styles.close} ${className}`}
      onClick={onClick}
    ></i>
  );
}
