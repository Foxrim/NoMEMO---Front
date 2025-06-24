import { createContext } from "react";

type HeaderContextType = {
    isListMode: boolean;
    handleListMode: () => void;
    modalAccount: boolean;
    handleModalAccount: () => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);