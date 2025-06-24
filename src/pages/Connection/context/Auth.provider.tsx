import { type ReactNode } from "react";
import { AuthContext } from "./Auth.context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const login = async (email: string, password: string) => {
    try {
      const connect = await fetch("http://localhost:5012/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await connect.json();

      return data;
    } catch (err) {
      console.error("Connection échoué : ", err);
      return null;
    }
  };

  const logout = async () => {
    await fetch("http://localhost:5012/api/v1/auth/logout", {
      credentials: "include",
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
