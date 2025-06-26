import { createContext } from "react";

type ModalContextProps = {
  handleMenu: () => void;
  menu: boolean;
  handleArrangement: () => void;
  arrangement: boolean;
  handleSort: () => void;
  sortModal: boolean;
  handleTheme: () => void;
  themeModal: boolean;
  handleEmail: () => void;
  updateEmail: boolean;
  handleEmailClose: () => void;
  handlePassword: () => void;
  updatePassword: boolean;
  handlePasswordClose: () => void;
  handleDeleteAccount: () => void;
  deleteAccount: boolean;
  handleDeleteAccountClose: () => void;
  handleCreateNotes: () => void;
  createNotes: boolean;
  handleCategoriesCreateNotes: () => void;
  categoriesCreateNotes: boolean;
  handleStatusCreateNotes: () => void;
  statusCreateNotes: boolean;
  handleUpdateNotes: () => void;
  updateNotes: boolean;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
