import { createContext } from "react";

export type userProps = {
    pseudo: string;
}

type HeaderContextType = {
    isListMode: boolean;
    handleListMode: () => void;
    modalAccount: boolean;
    handleModalAccount: () => void;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);