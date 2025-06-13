import { useState } from "react";
import { useModal } from "../../../../pages/Home/context/Modal/useModal";

function useNewCategory() {
  const [nameCategory, setNameCategory] = useState<string>("");
  const [colorId, setColorId] = useState<number>();

  const { handleAddCategory, handleModalAdd } = useModal();

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      colorId !== null &&
      colorId !== undefined &&
      nameCategory !== null &&
      nameCategory !== undefined
    ) {
      await fetch("http://localhost:5012/api/v1/categories/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameCategory, colorId }),
        credentials: "include",
      });

      handleAddCategory();
      handleModalAdd();
    }
  };

  return { colorId, setColorId, nameCategory, setNameCategory, createCategory };
}

export default useNewCategory;
