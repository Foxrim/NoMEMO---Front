import { useState, type ReactNode } from "react";
import { ModalContext } from "./Modal.context";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [addNoteModal, setAddNoteModal] = useState<boolean>(false);
  const [addCatNote, setAddCatNot] = useState<boolean>(false);
  const [addCategorieModal, setAddCategorieModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [updateCategory, setUpdateCategory] = useState<boolean>(false);
  const [deleteCategory, setDeleteCategory] = useState<boolean>(false);

  // Modal ajout d'une note
  const handleAddNote = () => setAddNoteModal((prev) => !prev);
  // Modal ajout d'une note ou d'une catégorie
  const handleModalAdd = () => setAddCatNot((prev) => !prev);

  // Modal ajout d'une catégorie
  const handleAddCategory = () => setAddCategorieModal((prev) => !prev);

  // Modal option de catégorie
  const handleCategorieOption = () => setCategoryModal((prev) => !prev);

  // Modal modification de catégorie
  const handleUpdateCategory = () => setUpdateCategory((prev) => !prev);

  // Modal suppréssion de catégorie
  const handleDeleteCategory = () => setDeleteCategory((prev) => !prev);


  return (
    <ModalContext.Provider
      value={{
        handleAddNote,
        addNoteModal,
        handleModalAdd,
        addCatNote,
        addCategorieModal,
        handleAddCategory,
        categoryModal,
        handleCategorieOption,
        updateCategory,
        deleteCategory,
        handleUpdateCategory,
        setUpdateCategory,
        handleDeleteCategory
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
