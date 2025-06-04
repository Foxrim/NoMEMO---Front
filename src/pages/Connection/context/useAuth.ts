import { useContext } from "react";
import { AuthContext } from "./Auth.context.ts";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth doit être utilisé avec AuthProvider");
    }
    return context;
};