import { useNavigate } from "react-router";
import { useAccount } from "../context/useAccount";
import { useAuth } from "../../../../pages/Connection/context/useAuth";
import { useHeader } from "../../../Header/context/useHeader";

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