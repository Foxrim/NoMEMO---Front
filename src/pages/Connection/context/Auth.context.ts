import { createContext } from "react";

type LoggedUser = {
    id: string;
};


type AuthContextProps = {
    login: (email: string, password: string) => Promise<LoggedUser | null>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);