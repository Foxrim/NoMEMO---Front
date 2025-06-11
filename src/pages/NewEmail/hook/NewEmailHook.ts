import { useState } from "react";
import { useNavigate } from "react-router";

function useNewEmailHook() {
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

  return { email, setEmail, newEmail};
}

export default useNewEmailHook;
