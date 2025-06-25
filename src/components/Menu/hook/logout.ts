import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useModal } from "../../../contexts/Modal/useModal";

function useLogout() {
  const { logout } = useAuth();
  const { handleMenu } = useModal();

  const handleLogout = () => {
    handleMenu();
    logout();
  };

  return { handleLogout };
};

export default useLogout;