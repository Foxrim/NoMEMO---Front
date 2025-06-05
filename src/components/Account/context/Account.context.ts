import { createContext } from "react";

export type userProps = {
    pseudo: string;
}

type AccountContextType = {
    fetchUser: () => void;
    user: userProps | undefined;
}

export const AccountContext = createContext<AccountContextType | undefined>(undefined);