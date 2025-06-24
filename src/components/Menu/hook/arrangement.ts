import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/User/useUser";

function useArrangement() {
  const [arr, setArr] = useState<string>("");

  const arrangements = ["Affichage en grille", "Affichage en liste"];
  const arrValues = ["grid", "list"];

  const { user, fetchUser } = useUser();

  useEffect(() => {
    if (user.arrangement === "grid") {
      setArr("Affichage en grille");
    } else if (user.arrangement === "list") {
      setArr("Affichage en liste");
    } else {
      setArr("non trouvé");
    }
  }, [user, setArr]);

  const handleUpdateArr = async (index: number) => {
    const selected = arrValues[index];

    try {
      const res = await fetch("http://localhost:5012/api/v1/users/modify-me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ arrangement: selected }),
        credentials: "include",
      });

      if (res.ok) {
        fetchUser();
      } 
      
    } catch (err) {
      console.error("Une erreur est survenu : ", err);
    }
  };

  return { arrangements, arr, handleUpdateArr };
}

export default useArrangement;
