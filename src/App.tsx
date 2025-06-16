import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import usePseudo from "./services/user";

export default function App() {
  const navigate = useNavigate();
  const pseudo = usePseudo();

  useEffect(() => {
    const verifyToken = async () => {
      const res = await fetch("http://localhost:5012/api/v1/auth/verify", {
        credentials: "include",
      });

      if (res.ok) {
        navigate(`/home/${pseudo}`);
      }
    };

    verifyToken();
  }, [navigate, pseudo]);

  return (
    <>
      <Outlet />
    </>
  );
}
