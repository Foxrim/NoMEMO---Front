import { createContext } from "react";

export type UserProps = {
  arrangement: string;
  sort: string;
  theme: string;
};

type UserContextProps = {
    user: UserProps[];
    fetchUser: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);