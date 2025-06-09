import { useEffect, useState } from "react";

interface usePseudoProps {
  pseudo: string;
}

function usePseudo() {
  const [pseudo, setPseudo] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchPseudo = async () => {
      try {
        const res = await fetch("http://localhost:5012/api/v1/users/find-me", {
          credentials: "include",
        });

        if (!res.ok)
          throw new Error("Erreur lors de la récupération du pseudo");

        const data: usePseudoProps = await res.json();
        setPseudo(data.pseudo);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPseudo();
  }, []);

  return pseudo;
}

export default usePseudo;
