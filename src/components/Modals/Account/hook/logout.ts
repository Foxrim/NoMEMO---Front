import { useAuth } from "../../../pages/Connection/context/useAuth";
import { useNavigate } from "react-router";
import { useHeader } from "../../Header/context/useHeader";
import { useAccount } from "../context/useAccount";

function useHandleLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { handleModalAccount } = useHeader();
  const { handleDisconnectModal } = useAccount();

  const handleLogout = () => {
    handleModalAccount();
    handleDisconnectModal();
    logout();
    navigate("/login");
  };

  return { handleLogout };
};

export default useHandleLogout;