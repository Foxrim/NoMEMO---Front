import { createContext } from "react";

type ModalContextProps = {
  handleMenu: () => void;
  menu: boolean;
  handleArrangement: () => void;
  arrangement: boolean;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
