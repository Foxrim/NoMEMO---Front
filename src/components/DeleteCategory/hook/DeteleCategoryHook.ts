import { useState } from "react";
import { useModal } from "../../../pages/Home/context/Modal/useModal";
import { useNotes } from "../../../pages/Home/context/fetchNotes/useNotes";

function useDeleteCategory() {
  const [categoryId, setCategoryId] = useState<number>();

  const { handleDeleteCategory } = useModal();
  const { fetchNotes } = useNotes();

  const deleteCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch(
        `http://localhost:5012/api/v1/categories/${categoryId}/delete`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        handleDeleteCategory();
        fetchNotes();
      } else {
        console.error("Erreur serveur :", await res.text());
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }
  };

  return { deleteCategory, setCategoryId, categoryId };
}

export default useDeleteCategory;
