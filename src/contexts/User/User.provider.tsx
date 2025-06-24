import { useEffect, useState, type ReactNode } from "react";
import { UserContext } from "./User.context";
import type { UserProps } from "./User.context";

export function UserProvider({ children }: {children: ReactNode}) {
    const [user, setUser] = useState<UserProps[]>([]);
    
      const fetchUser = async () => {
        const res = await fetch("http://localhost:5012/api/v1/users/find-me", {
          credentials: "include",
        });
        const data: UserProps[] = await res.json();
        setUser(data);
      };
    
      useEffect(() => {
        fetchUser();
      }, []);

    return (
        <UserContext value={{ user, fetchUser }}>
            {children}
        </UserContext>
    )
}