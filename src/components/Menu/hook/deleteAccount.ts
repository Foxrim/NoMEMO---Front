import { useModal } from "../../../contexts/Modal/useModal";

function useDeleteAccount() {
    const { handleMenu } = useModal();

    const fetchDeleteAccount = async () => {

        try {
            const res = await fetch ('http://localhost:5012/api/v1/users/delete-me', {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })

            if (!res.ok) {
                const text = await res.text();
                console.error("Réponse non valide :", res.status, text);
                return;
            }
            
            handleMenu();
        } catch (err) {
            console.error('Une erreur est survenue : ', err);
        }
    }

    return { fetchDeleteAccount };
}

export default useDeleteAccount;