import Buttons from "../../components/Buttons/Buttons";
import EmailInput from "../../components/Inputs/Email/EmailInput";
import Title from "../../components/Title/Title";
import styles from "./NewEmail.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewEmail() {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const newEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = sessionStorage.getItem("resetTokenEmail");
    
    try {
        if (!email) {
            return;
        }
        
        const data = await fetch("http://localhost:5012/api/v1/email/newEmail", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, token }),
        });
        
        if (data.ok) {
            navigate("/login");
        }
    } catch {
      console.error("Email invalide");
    }
  };

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
