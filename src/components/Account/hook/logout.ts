import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useNavigate } from "react-router";
import { useHeader } from "../../Header/context/useHeader";

function useHandleLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { handleModalAccount } = useHeader();

  const handleLogout = () => {
    handleModalAccount();
    logout();
    navigate("/login");
  };

  return { handleLogout };
};

export default useHandleLogout;