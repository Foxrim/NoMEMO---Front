import { useState, type ReactNode } from "react";
import { ModalContext } from "./Modal.context";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<boolean>(false);
  const [arrangement, setArrangement] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [themeModal, setThemeModal] = useState<boolean>(false);
  const [updateEmail, setUpdateEmail] = useState<boolean>(false);

  // Ouverture fermeture du menu
  const handleMenu = () => {
    setMenu((prev) => !prev);
  }

  // Ouverture fermeture de l'option Disposition
  const handleArrangement = () => {
    setArrangement((prev) => !prev);
  }

  // Ouverture fermeture de l'option Trier
  const handleSort = () => {
    setSortModal((prev) => !prev);
  }

  // Ouverture fermeture de l'option Aspect
  const handleTheme = () => {
    setThemeModal((prev) => !prev);
  }

  // Ouverture fermeture de confirmation de changement d'email
  const handleEmail = () => {
    setUpdateEmail((prev) => !prev);
  }

  // Fermeture de confirmation de changement d'email
  const handleEmailClose = () => {
    setUpdateEmail(false);
  }

  return (
    <ModalContext.Provider
      value={{
       handleMenu,
       menu,
       handleArrangement,
       arrangement,
       handleSort,
       sortModal,
       handleTheme,
       themeModal,
       handleEmail,
       updateEmail,
       handleEmailClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
