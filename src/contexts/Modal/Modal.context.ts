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
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
