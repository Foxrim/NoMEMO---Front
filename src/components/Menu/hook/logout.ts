import { useNavigate } from "react-router";
import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useModal } from "../../../contexts/Modal/useModal";

function useLogout() {
  const { logout } = useAuth();
  const { handleMenu } = useModal();

  const navigate = useNavigate();

  const handleLogout = () => {
    handleMenu();
    logout();
    navigate("login");
  };

  return { handleLogout };
};

export default useLogout;