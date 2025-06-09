import { useCallback, useEffect, useState } from "react";
import { AccountContext } from "./Account.context";
import type { UserProps } from "./Account.context";

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProps>({
    pseudo: "",
  });
  
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

  return (
    <AccountContext.Provider
      value={{
        user,
        setUser,
        fetchUser
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
