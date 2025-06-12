import { useState } from "react";
import useHomeModal from "../../../pages/Home/hook/HomeModal";

function useNewCategory() {
  const [nameCategory, setNameCategory] = useState<string>("");
  const [colorId, setColorId] = useState<number>();

  const { handleAddCategorie } = useHomeModal();

  const createCategory = async () => {
    if (colorId !== null && colorId !== undefined  && nameCategory !== null && nameCategory !== undefined) {
        await fetch("http://localhost:5012/api/v1/categories/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nameCategory, colorId }),
            credentials: "include",
        });
        
        handleAddCategorie();
    }
  };

  return { colorId, setColorId, nameCategory, setNameCategory, createCategory };
}

export default useNewCategory;
