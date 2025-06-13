import { useContext } from "react";
import { ModalContext } from "./Modal.context";

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal doit être utilisé avec ModalProvider");
    }
    return context;
};