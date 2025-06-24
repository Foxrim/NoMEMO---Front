import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/User/useUser";

function useArrangement() {
    const [arr, setArr] = useState<string>('');
    const arrangements = ["Affichage en grille", "Affichage en liste"];
    const { user } = useUser();

    useEffect(() => {
        if (user.arrangement === "grid") {
            setArr('Affichage en grille');
        } else if (user.arrangement === "list") {
            setArr('Affichage en liste');
        } else {
            setArr('non trouvé')
        }

    }, [user, setArr]);

    return { arrangements, arr };
}

export default useArrangement;