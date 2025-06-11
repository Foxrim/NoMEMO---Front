import { useState } from "react";
import { useNavigate } from "react-router";

function useNewAccountHook() {
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

    const createAccount = await fetch(
      "http://localhost:5012/api/v1/users/create-account",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await createAccount.json();
    if (
      data?.error?.issues &&
      Array.isArray(data.error.issues) &&
      data.error.issues.length > 0
    ) {
      setRes(data.error.issues.message);
    } else if (data.message) {
      setRes(data.message);
    } else {
      setRes("Une erreur est survenue.");
    }

    setTimeout(() => {
      setRes("");
    }, 2500);

    navigate("/");
  };

  return { res, newAccount, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword };
}

export default useNewAccountHook;
