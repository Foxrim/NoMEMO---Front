import { createContext } from "react";

type ModalContextProps = {
  handleMenu: () => void;
  menu: boolean
};

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
