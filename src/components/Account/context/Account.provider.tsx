import { useCallback, useEffect, useState } from "react";
import { AccountContext } from "./Account.context";
import type { userProps } from "./Account.context";

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<userProps>();

  const id = localStorage.getItem("user");

  const fetchUser = useCallback(() => {
    fetch(`http://localhost:5012/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data: userProps) => setUser(data));
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <AccountContext.Provider
      value={{
        user,
        fetchUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
