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
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
