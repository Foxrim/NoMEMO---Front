import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useModal } from "../../../contexts/Modal/useModal";
import { useNavigate } from "react-router";

function useLogout() {
  const { logout } = useAuth();
  const { handleMenu } = useModal();

  const navigate = useNavigate();

  const handleLogout = () => {
    handleMenu();
    logout();
    navigate('/');
  };

  return { handleLogout };
};

export default useLogout;