import { createContext } from "react";


type AccountContextType = {
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
