import { useEffect, useRef, useState } from "react";
import { useAccount } from "../context/useAccount";

function useUpdatePseudo() {
  const [isUpdatePseudo, setIsUpdatePseudo] = useState<boolean>(false);
  const [tempPseudo, setTempPseudo] = useState<string>("");

  const { user, setUser } = useAccount();

  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (isUpdatePseudo) inputRef.current?.focus();
  }, [isUpdatePseudo]);

  const handleCancelUpdate = () => {
    if (user?.pseudo) {
      setTempPseudo(user.pseudo);
    }
    setIsUpdatePseudo(false);
  };

  const handleUpdatePseudo = () => {
    setIsUpdatePseudo(true);
    if (user?.pseudo) {
      setTempPseudo(user.pseudo);
    }
  };

  useEffect(() => {
    if (!isUpdatePseudo && user?.pseudo) {
      setTempPseudo(user.pseudo);
    }
  }, [isUpdatePseudo, user?.pseudo]);

  const handleChangePseudo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempPseudo(e.target.value);
  };

  const updatePseudo = async () => {
    const id = localStorage.getItem("user");

    try {
      const response = await fetch(`http://localhost:5012/api/v1/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pseudo: tempPseudo }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message || "Erreur !!!");
        return;
      }

      setUser((prev) => ({
        ...prev!,
        pseudo: tempPseudo,
      }));

      setIsUpdatePseudo(false);
    } catch {
      throw new Error("Erreur lors de la modification du pseudo");
    }
  };

  return {
    isUpdatePseudo,
    handleUpdatePseudo,
    handleChangePseudo,
    updatePseudo,
    tempPseudo,
    handleCancelUpdate,
    inputRef
  };
}

export default useUpdatePseudo;
