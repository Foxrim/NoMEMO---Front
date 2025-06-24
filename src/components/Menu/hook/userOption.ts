import { useEffect, useState } from "react";

type UserProps = {
  arrangement: string;
  sort: string;
  theme: string;
};

function useUserOption() {
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  const fetchUser = async () => {
    const res = await fetch("http://localhost:5012/api/v1/users/find-me", {
      credentials: "include",
    });
    const data: UserProps = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { fetchUser, user };
}

export default useUserOption;
