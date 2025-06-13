import { useEffect, useState } from "react";
import styles from "./Close.module.css";

type CloseProps = {
  onClick?: () => void;
  className: string;
  newIcon?: string;
};

export default function Close({ onClick, className, newIcon }: CloseProps) {
  const [icon, setIcon] = useState<string | 'fa-solid fa-xmark'>('fa-solid fa-xmark')

  useEffect(() => {
    if (newIcon) setIcon(newIcon);
  }, [newIcon])

  return (
    <i
      className={`${icon} ${styles.close} ${className}`}
      onClick={onClick}
    ></i>
  );
}
