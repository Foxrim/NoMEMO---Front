import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import styles from "./Connection.module.css";
import { useAuth } from "./context/useAuth";

export default function Connection() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const connection = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login(email, password);

      if (data) {
        navigate('/home');
      }
    } catch {
      console.error('Mauvais identifiants');
    }
  }
  

  return (
    <div className={styles.auth}>
      <Title />
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
      <NavLink to="/forgot-password">Mot de passe oublié</NavLink>
      <NavLink className={styles.createAccount} to="/create-account">
        Créer un compte
      </NavLink>
    </div>
  );
}
