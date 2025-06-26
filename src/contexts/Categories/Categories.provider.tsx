import { useEffect, useState, type ReactNode } from "react";
import { CategoriesContext, type CategoriesProps } from "./Categories.context";

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "http://localhost:5012/api/v1/categories/find-by-user",
        {
          credentials: "include",
        }
      );

      let data: CategoriesProps[] = await res.json();
      if (!data || data.length === 0) {
        data = [{ id: 0, nameCategory: "Aucune" }];
      }
      setCategories([...data]);
    } catch (err) {
      console.error("Une erreur est survenue : ", err);
      setCategories([{ id: 0, nameCategory: "Aucune" }]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ fetchCategories, categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
