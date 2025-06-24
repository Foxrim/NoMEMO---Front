import { useContext } from "react";
import { UserContext } from "./User.context";

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser doit être utilisé avec UserProvider");
    }
    return context;
}