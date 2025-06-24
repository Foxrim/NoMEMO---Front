import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/User/useUser";

function useSort() {
    const [sort, setSort] = useState<string>('');

    const sorts = ['Trier par date de création', 'Trier par date de modification'];
    const sortValues = ['creation', 'modify'];

    const { user, fetchUser } = useUser();

    useEffect(() => {
        if (user.sort === 'creation') {
            setSort('Trier par date de création');
        } else if (user.sort === 'modify') {
            setSort('Trier par date de modification');
        } else {
            setSort('non trouvé');
        }
    }, [user, setSort]);

    const handleUpdateSort = async (index: number) => {
        const selected = sortValues[index];

        try {
            const res = await fetch ('http://localhost:5012/api/v1/users/modify-me', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ sort: selected }),
                credentials: 'include',
            });

            if (res.ok) {
                fetchUser();
            }

        }  catch (err) {
            console.error('Une erreur est survenue: ', err);
        }
    }

    return { sorts, sort, handleUpdateSort };
}

export default useSort;