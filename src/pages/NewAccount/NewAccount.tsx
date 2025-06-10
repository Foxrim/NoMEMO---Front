import styles from "./NewAccount.module.css";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title/Title";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import PasswordInput from "../../components/Inputs/Password/PasswordInput";
import Buttons from "../../components/Buttons/Buttons";
import useNewAccountHook from "./hook/NewAccountHook";

export default function NewAccount() {
  const {
    res,
    newAccount,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useNewAccountHook();
  
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
