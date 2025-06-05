import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useNavigate } from "react-router";

function useHandleLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return { handleLogout };
};

export default useHandleLogout;