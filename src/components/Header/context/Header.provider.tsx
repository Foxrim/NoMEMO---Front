import { useState } from "react";
import { HeaderContext } from "./Header.context";

export const HeaderProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    const [isListMode, setIsListMode] = useState<boolean>(true);
    const [modalAccount, setModalAccount] = useState<boolean>(false);

        const handleListMode = () => {
            setIsListMode((prev) => !prev);
        };

        const handleModalAccount = () => {
            setModalAccount((prev) => !prev);
        }

        return (
            <HeaderContext.Provider value={{ isListMode, handleListMode, modalAccount, handleModalAccount }}>
                {children}
            </HeaderContext.Provider>
        )
}