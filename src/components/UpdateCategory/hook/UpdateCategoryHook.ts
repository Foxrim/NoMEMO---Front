import { useEffect, useState } from "react";
import useCategoriesList from "../../AddNote/hook/categoriesList";
import useHomeHook from "../../../pages/Home/hook/HomeHook";
import useHomeModal from "../../../pages/Home/hook/HomeModal";

function useUpdateCategory() {
  const [categoryId, setCategoryId] = useState<number>();
  const [nameCategory, setNameCategory] = useState<string>("");
  const [colorId, setColorId] = useState<number>();

  const categories = useCategoriesList();
  const { fetchNotes } = useHomeHook();
  const {handleUpdateCategoryClose} = useHomeModal();

  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setNameCategory(selectedCategory.nameCategory);
      setColorId(Number(selectedCategory.colorId));
    }
  }, [categoryId, categories]);

  const updateCategory = async () => {

    try {
      const res = await fetch(
        `http://localhost:5012/api/v1/categories/${categoryId}/modify`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: categoryId, nameCategory, colorId }),
          credentials: "include",
        }
      );

      if (res.ok) {
        fetchNotes();
        handleUpdateCategoryClose();
      }
    } catch (err) {
      console.error(err)
    } 
  };

  return {
    categoryId,
    setCategoryId,
    nameCategory,
    setNameCategory,
    colorId,
    setColorId,
    updateCategory,
  };
}

export default useUpdateCategory;
