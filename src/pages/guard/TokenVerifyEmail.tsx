import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function TokenVerifyEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        await fetch('http://localhost:5012')
        if (token) {
          sessionStorage.setItem("resetTokenEmail", token);

          navigate(`/new-email?token=${token}`);
        } else {
          navigate('/login');
        }
      } catch (err) {
        console.error(err);
      }
    };

    verifyToken();
  }, [navigate]);

  return <p>Vérification du lien en cours...</p>;
}
