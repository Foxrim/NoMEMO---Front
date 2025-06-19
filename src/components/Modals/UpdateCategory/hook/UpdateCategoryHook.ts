import { useEffect, useState } from "react";
import useCategoriesList from "../../AddNote/hook/categoriesList";
import { useModal } from "../../../../pages/NotesPage/Modal/useModal";
import { useNotes } from "../../../../pages/Home/context/fetchNotes/useNotes";

function useUpdateCategory() {
  const [categoryId, setCategoryId] = useState<number>();
  const [nameCategory, setNameCategory] = useState<string>("");
  const [colorId, setColorId] = useState<number>();

  const categories = useCategoriesList();
  const { fetchNotes } = useNotes();
  const { handleUpdateCategory, handleCategorieOption } = useModal();

  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setNameCategory(selectedCategory.nameCategory);
      setColorId(Number(selectedCategory.colorId));
    }
  }, [categoryId, categories]);

  const updateCategory = async (e: React.FormEvent) => {
    e.preventDefault();

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
        handleUpdateCategory();
        handleCategorieOption();
        fetchNotes();
      }
    } catch (err) {
      console.error(err);
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
