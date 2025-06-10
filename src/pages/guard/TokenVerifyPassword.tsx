import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function TokenVerifyPassword() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        navigate('/forgot-password');
        return;
      }

      try {
        if (token) {
          sessionStorage.setItem("resetToken", token);

          navigate(`/new-password?token=${token}`);
        } else {
          navigate('/forgot-password');
        }
      } catch (err) {
        console.error(err);
      }
    };

    verifyToken();
  }, [navigate]);

  return <p>Vérification du lien en cours...</p>;
}
