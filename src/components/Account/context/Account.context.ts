import { createContext } from "react";

export type UserProps = {
  pseudo: string;
};

type AccountContextType = {
  fetchUser: () => void;
  user: UserProps | undefined;
  setUser: (value: React.SetStateAction<UserProps>) => void;
  emailModal: boolean;
  passwordModal: boolean;
  disconnectModal: boolean;
  deleteAccountModal: boolean;
  handleEmailModal: () => void;
  handlePasswordModal: () => void;
  handleDisconnectModal: () => void;
  handleDeleteAccountModal: () => void;
};

export const AccountContext = createContext<AccountContextType | undefined>(
  undefined
);
