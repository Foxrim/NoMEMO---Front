import { useCallback, useEffect, useState } from "react";
import { HeaderContext } from "./Header.context";
import type { userProps } from "./Header.context"

export const HeaderProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    const [isListMode, setIsListMode] = useState<boolean>(true);
    const [modalAccount, setModalAccount] = useState<boolean>(false);
    const [user, setUser] = useState<userProps>();

    const id = localStorage.getItem('user')
    
        const handleListMode = () => {
            setIsListMode((prev) => !prev);
        };

        const handleModalAccount = () => {
            setModalAccount((prev) => !prev);
        }

        const fetchUser = useCallback(() => {
            fetch(`http://localhost:5012/api/v1/users/${id}`)
            .then((response) => response.json())
            .then((data: userProps) => setUser(data));
        }, [id]);

        useEffect(() => {
            fetchUser();
        }, [fetchUser]);


        return (
            <HeaderContext.Provider value={{ isListMode, handleListMode, modalAccount, handleModalAccount, user, fetchUser }}>
                {children}
            </HeaderContext.Provider>
        )
}