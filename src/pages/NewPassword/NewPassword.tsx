import { NavLink } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import Title from "../../components/Title/Title";
import styles from "./NewPassword.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigate = useNavigate();

    const newPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = sessionStorage.getItem('resetToken');

        try {
            if (password !== confirmPassword) {
                return;
            }

            const data = await fetch('http://localhost:5012/api/v1/password/updatePassword', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password, token })
            })

            if (data.ok) {
                navigate('/login');
            }
        } catch {
            console.error('Mot de passe invalide');
        }
    } 

  return (
    <div className={styles.newPassword}>
      <Title />
      <form onSubmit={newPassword}>
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
        <Buttons type="submit" children="Modifier le mot de passe" />
      </form>
      <NavLink to="/login">Connection</NavLink>
      <NavLink className={styles.createAccount} to="/create-account">
        Créer un compte
      </NavLink>
    </div>
  );
}
