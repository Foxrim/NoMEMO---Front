import { NavLink } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import Title from "../../components/Title/Title";
import styles from "./NewPassword.module.css";
import useNewPasswordHook from "./hook/NewPasswordHook";

export default function NewPassword() {
  const { password, confirmPassword, newPassword, setPassword, setConfirmPassword } = useNewPasswordHook();
    
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
      <NavLink className={styles.connexion} to="/login">Connection</NavLink>
      <NavLink className={styles.createAccount} to="/create-account">
        Créer un compte
      </NavLink>
    </div>
  );
}
