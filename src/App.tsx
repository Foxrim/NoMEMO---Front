import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const res = await fetch("http://localhost:5012/api/v1/auth/verify", {
        credentials: "include",
      });

      if (res.ok) {
        navigate(`/home`);
      }
    };

    verifyToken();
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
