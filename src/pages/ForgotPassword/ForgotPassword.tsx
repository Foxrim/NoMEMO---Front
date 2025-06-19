import { NavLink } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import Title from "../../components/Title/Title";
import styles from "./ForgotPassword.module.css";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");

  const newPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5012/api/v1/password/forgotPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
    } catch {
      console.error("Email non reconnue");
    }
  };

  return (
    <div className={styles.forgotPassword}>
      <Title />
      <form onSubmit={newPassword}>
        <EmailInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Buttons type="submit" children="Confirmer" />
      </form>
      <NavLink className={styles.connexion} to="/login">Connection</NavLink>
      <NavLink className={styles.createAccount} to="/create-account">
        Créer un compte
      </NavLink>
    </div>
  );
}
