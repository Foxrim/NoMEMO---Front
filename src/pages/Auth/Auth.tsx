import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./Auth.module.css";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const connection = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const connect = await fetch("http://localhost:5012/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await connect.json();
    setRes(data.message);

    setTimeout(() => {
        setRes("");
    }, 2500);
  };

  return (
    <div className={styles.auth}>
      <Title />
      <p>{res}</p>
      <form onSubmit={connection}>
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
        <Buttons type="submit" children="Connect" />
      </form>
    <NavLink to="/">Mot de passe oublié</NavLink>
    <NavLink className={styles.createAccount} to="/create-account">Créer un compte</NavLink>
    </div>
  );
}
