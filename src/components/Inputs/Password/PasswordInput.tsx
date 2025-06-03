import styles from "./PasswordInput.module.css";
import React, { useState } from "react";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: React.HTMLInputTypeAttribute;
};

export default function PasswordInput({ ...props }: PasswordInputProps) {
  const [see, setSee] = useState<boolean>(false);

  const handleSee = () => {
    setSee((prev) => !prev);
  };

  return (
    <div className={styles.passwordInput}>
      <input
        type={see ? "text" : "password"}
        {...props}
      />
      <i
        className={see ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
        style={!see ? { marginLeft: "-2.07rem" } : {}}
        aria-label={
          see ? "Masquer le mot de passe" : "Afficher le mot de passe"
        }
        onClick={handleSee}
        tabIndex={0}
        role="button"
      ></i>
    </div>
  );
}
