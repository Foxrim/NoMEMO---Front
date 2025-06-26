import { useState, type ReactNode } from "react";
import { ModalContext } from "./Modal.context";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<boolean>(false);
  const [arrangement, setArrangement] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);
  const [themeModal, setThemeModal] = useState<boolean>(false);
  const [updateEmail, setUpdateEmail] = useState<boolean>(false);
  const [updatePassword, setUpdatePassword] = useState<boolean>(false);
  const [deleteAccount, setDeleteAccount] = useState<boolean>(false);
  const [createNotes, setCreateNotes] = useState<boolean>(false);
  const [categoriesCreateNotes, setCategoriesCreateNotes] = useState<boolean>(false);
  const [statusCreateNotes, setStatusCreateNotes] = useState<boolean>(false);
  const [updateNotes, setUpdateNotes] = useState<boolean>(false);

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

  // Ouverture fermeture de confirmation de changement de password
  const handlePassword = () => {
    setUpdatePassword((prev) => !prev);
  }

  // Fermeture de confirmation de changement de password
  const handlePasswordClose = () => {
    setUpdatePassword(false);
  }

  // Ouverture fermeture de confirmation de suppréssion de compte
  const handleDeleteAccount = () => {
    setDeleteAccount((prev) => !prev);
  }

  // Fermeture de confirmation de suppréssiond de compte
  const handleDeleteAccountClose = () => {
    setDeleteAccount(false);
  }

  // Ouverture fermeture de création
  const handleCreateNotes = () => {
    setCreateNotes((prev) => !prev);
  }

  // Ouverture fermeture de l'option catégories de création de notes
  const handleCategoriesCreateNotes = () => {
    setCategoriesCreateNotes((prev) => !prev)
  }

  // Ouverture fermeture de l'option status de création de notes
  const handleStatusCreateNotes = () => {
    setStatusCreateNotes((prev) => !prev);
  }

  // Ouverture fermeture de modification de notes
  const handleUpdateNotes = () => {
    setUpdateNotes((prev) => !prev);
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
       handlePassword,
       updatePassword,
       handlePasswordClose,
       handleDeleteAccount,
       deleteAccount,
       handleDeleteAccountClose,
       handleCreateNotes,
       createNotes,
       handleCategoriesCreateNotes,
       categoriesCreateNotes,
       handleStatusCreateNotes,
       statusCreateNotes,
       handleUpdateNotes,
       updateNotes
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
