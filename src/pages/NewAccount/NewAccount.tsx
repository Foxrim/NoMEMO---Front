import styles from "./NewAccount.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import Buttons from "../../components/Buttons/Buttons";
import { useState } from "react";

export default function NewAccount() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [res, setRes] = useState<string>("");
  const navigate = useNavigate();

  const newAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRes("Mot de passe invalide");
      setTimeout(() => {
        setRes("");
      }, 2500);
      return;
    }

    const createAccount = await fetch("http://localhost:5012/api/v1/users/create-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await createAccount.json();
    if (data?.error?.issues && Array.isArray(data.error.issues) && data.error.issues.length > 0) {
        setRes(data.error.issues.message);
    } else if (data.message) {
        setRes(data.message);
    } else {
        setRes('Une erreur est survenue.')
    }

    setTimeout(() => {
      setRes("");
    }, 2500);

    navigate('/');
  };

  return (
    <div className={styles.auth}>
      <Title />
      <p>{res}</p>
      <form onSubmit={newAccount}>
        <EmailInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          placeholder="Mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Buttons type="submit" children="Créer un compte" />
      </form>
      <NavLink to="/forgot-password">Mot de passe oublié</NavLink>
      <NavLink className={styles.createAccount} to="/">
        Connection
      </NavLink>
    </div>
  );
}
