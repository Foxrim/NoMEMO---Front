import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useNavigate } from "react-router";

export const useHandleLogout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return handleLogout;
};