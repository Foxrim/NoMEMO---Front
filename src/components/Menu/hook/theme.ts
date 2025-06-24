import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/User/useUser";

function useTheme() {
  const [theme, setTheme] = useState<string>("");

  const themes = ["Sombre", "Clair"];
  const themeValues = ["dark", "light"];

  const { user, fetchUser } = useUser();

  useEffect(() => {
    if (user.theme === "dark") {
      setTheme("Sombre");
    } else if (user.theme === "light") {
      setTheme("Clair");
    } else {
      setTheme("non trouvé");
    }
  }, [user.theme]);

  const handleUpdateTheme = async (index: number) => {
    const selected = themeValues[index];

    try {
      const res = await fetch("http://localhost:5012/api/v1/users/modify-me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: selected }),
        credentials: "include",
      });

      if (res.ok) {
        fetchUser();
      }
    } catch (err) {
      console.error("Une erreur est survenue: ", err);
    }
  };

  return { theme, themes, handleUpdateTheme };
}

export default useTheme;
