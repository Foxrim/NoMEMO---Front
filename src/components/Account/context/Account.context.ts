import { createContext } from "react";

export type UserProps = {
  pseudo: string;
};

type AccountContextType = {
  fetchUser: () => void;
  user: UserProps | undefined;
  setUser: (value: React.SetStateAction<UserProps>) => void
};

export const AccountContext = createContext<AccountContextType | undefined>(
  undefined
);
