import { useState, type ReactNode } from "react";
import { ModalContext } from "./Modal.context";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  }


  return (
    <ModalContext.Provider
      value={{
       handleMenu,
       menu
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
