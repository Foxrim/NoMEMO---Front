import { useNavigate } from "react-router";
import { useAuth } from "../../../../pages/Connection/context/useAuth";

function useDeleteAccount() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const destroyAccount = async () => {
        try {
            const res = await fetch('http://localhost:5012/api/v1/users/delete-me', {
                method: "DELETE",
                headers: { 'Content-Type': "application/json" },
                credentials: "include",
            });
            
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Erreur lors de la suppression du compte");
            }

            if (data.ok) {
                logout();
                navigate('/login');
            } else {
                throw new Error("La suppression a échoué sans message d'erreur");
            }
        } catch (err) {
            console.error("Erreur suppression compte:", err);
        }
    }

    return { 
        destroyAccount
    };
}

export default useDeleteAccount;