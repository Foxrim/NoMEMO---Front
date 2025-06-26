import { useState, type ReactNode } from "react";
import { CategoriesContext, type CategoriesProps } from "./Categories.context";

export function CategoriesProvider({ children } : { children: ReactNode }) {
    const [categories, setCategories] = useState<CategoriesProps[]>([]);

    const fetchCategories = async () => {
        try {
            const res = await fetch ('http://localhost:5012/api/v1/categories/find-by-user', {
                credentials: "include"
            });

            const data: CategoriesProps[] = await res.json();
            setCategories(data);
        } catch (err) {
            console.error('Une erreur est survenue : ', err );
        }
    }


    return (
        <CategoriesContext.Provider value={{fetchCategories, categories}}>
        {children}
        </CategoriesContext.Provider>
    )
}