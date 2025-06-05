import { useContext } from "react";
import { HeaderContext } from "./Header.context";

export const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error('useHeader doit être utilisé avec HeaderProvider');
    }
    return context;    
}