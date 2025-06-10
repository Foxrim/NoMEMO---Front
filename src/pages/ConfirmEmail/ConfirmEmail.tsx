import Title from "../../components/Title/Title";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./ConfirmEmail.module.css";

export default function ConfirmEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const emailIsValid = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        throw new Error('Token invalide');
      }

      try {
        const data = await fetch(`http://localhost:5012/api/v1/email/token=${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ token })
        })
        console.log(data)

        if (data.ok) {
          navigate(`login`);
        }
      } catch {
        console.error("Token invalide");
      }
    };

    emailIsValid();
  }, [navigate]);

  return (
    <div className={styles.confirmEmail}>
      <Title />
      <p>Confirmation de l'email en cours</p>
    </div>
  );
}
