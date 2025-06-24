import { useState, type ReactNode } from "react";
import { ModalContext } from "./Modal.context";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<boolean>(false);
  const [arrangement, setArrangement] = useState<boolean>(false);

  // Ouverture fermeture du menu
  const handleMenu = () => {
    setMenu((prev) => !prev);
  }

  // Ouverture fermeture de l'option Disposition
  const handleArrangement = () => {
    setArrangement((prev) => !prev);
  }


  return (
    <ModalContext.Provider
      value={{
       handleMenu,
       menu,
       handleArrangement,
       arrangement,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
