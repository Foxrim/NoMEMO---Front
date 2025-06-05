import { useState } from "react";

function useUpdatePseudo() {
  const [isUpdatePseudo, setIsUpdatePseudo] = useState<boolean>(false);

  const handleUpdatePseudo = () => {
    setIsUpdatePseudo((prev) => !prev);
  };

  return { isUpdatePseudo, handleUpdatePseudo };
}

export default useUpdatePseudo;