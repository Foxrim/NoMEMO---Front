import { createContext } from "react";

export type UserProps = {
  pseudo: string;
};

type AccountContextType = {
  fetchUser: () => void;
  user: UserProps | undefined;
};

export const AccountContext = createContext<AccountContextType | undefined>(
  undefined
);
