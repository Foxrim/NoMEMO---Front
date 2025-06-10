import { useCallback, useEffect, useState } from "react";
import { AccountContext } from "./Account.context";
import type { UserProps } from "./Account.context";

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProps>({
    pseudo: "",
  });
  const [emailModal, setEmailModal] = useState<boolean>(false);
  const [passwordModal, setPasswordModal] = useState<boolean>(false);
  const [disconnectModal, setDisconnectModal] = useState<boolean>(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState<boolean>(false);
  
  const fetchUser = useCallback(() => {
    fetch(`http://localhost:5012/api/v1/users/find-me`,{
      credentials: "include",
    })
    .then((response) => response.json())
    .then((data: UserProps) => setUser(data));
  }, []);
  
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
        user,
        setUser,
        fetchUser,
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
