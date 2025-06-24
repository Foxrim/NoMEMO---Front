import { useState } from "react";
import { AccountContext } from "./Account.context";

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [emailModal, setEmailModal] = useState<boolean>(false);
  const [passwordModal, setPasswordModal] = useState<boolean>(false);
  const [disconnectModal, setDisconnectModal] = useState<boolean>(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState<boolean>(false);
  

  const handleEmailModal = () => {
    setEmailModal((prev) => !prev)
  }

  const handlePasswordModal = () => {
    setPasswordModal((prev) => !prev)
  }

  const handleDisconnectModal = () => {
    setDisconnectModal((prev) => !prev)
  }

  const handleDeleteAccountModal = () => {
    setDeleteAccountModal((prev) => !prev)
  }

  return (
    <AccountContext.Provider
      value={{
        emailModal,
        passwordModal, 
        disconnectModal,
        deleteAccountModal,
        handleEmailModal,
        handlePasswordModal,
        handleDisconnectModal,
        handleDeleteAccountModal,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
