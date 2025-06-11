import { useEffect, useState } from "react";

type CategoriesProps = {
    id: number;
    nameCategory: string;
}

function useCategoriesList() {
    const [categories, setCategories] = useState<CategoriesProps[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch('http://localhost:5012/api/v1/categories/find-by-user', {
                credentials: "include"
            });
            const data: CategoriesProps[] = await res.json();

            if (!data || data.length === 0) {
                setCategories([{ id: 0, nameCategory: 'Aucune catégories encore créée' }]);
            } else {
                setCategories(data);
            }
        };

        fetchCategories();
    }, []);


    return categories;
}

export default useCategoriesList;