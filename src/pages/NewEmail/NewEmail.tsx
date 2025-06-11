import Buttons from "../../components/Buttons/Buttons";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import Title from "../../components/Title/Title";
import useNewEmailHook from "./hook/NewEmailHook";
import styles from "./NewEmail.module.css";

export default function NewEmail() {
  const { email, newEmail, setEmail } = useNewEmailHook();
  
  return (
    <div className={styles.newEmail}>
      <Title />
      <form onSubmit={newEmail}>
        <EmailInput
          type="email"
          placeholder="Nouvel email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Buttons type="submit" children="Modifier l'email" />
      </form>
    </div>
  );
}
