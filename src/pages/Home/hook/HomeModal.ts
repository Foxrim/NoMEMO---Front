import { useState } from "react";

function useHomeModal() {
  const [addNoteModal, setAddNoteModal] = useState<boolean>(false);
  const [addCatNote, setAddCatNot] = useState<boolean>(false);
  const [addCategorieModal, setAddCategorieModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [updateCategory, setUpdateCategory] = useState<boolean>(false);
  const [deleteCategory, setDeleteCategory] = useState<boolean>(false);

  // Modal ajout d'une note 
  const handleAddNote = () => {
    setAddNoteModal((prev) => !prev);
  };

  // Modal ajout d'une note ou d'une catégorie
  const handleModalAdd = () => {
    setAddCatNot((prev) => !prev);
  };

  // Modal ajout d'une catégorie
  const handleAddCategorie = () => {
    setAddCategorieModal((prev) => !prev);
  };

  // Modal fermeture de la première modal et ajout de note
  const handleChangeToAddNote = () => {
    handleModalAdd();
    handleAddNote();
  };

  // Modal fermeture de la première modal et ajout de categorie
  const handleChangeToAddCategorie = () => {
    handleModalAdd();
    handleAddCategorie();
  };

  // Modal option de catégorie
  const handleCategorieOption = () => {
    setCategoryModal((prev) => !prev);
  }

  // Modal modification de catégorie
  const handleUpdateCategory = () => {
    setUpdateCategory((prev) => !prev);
  }

  // Modal suppréssion de catégorie
  const handleDeleteCategory = () => {
    setDeleteCategory((prev) => !prev);
  }

  // Modal fermeture de la première modal et modification de categorie
  const handleChangeToUpdateCategorie = () => {
    handleCategorieOption();
    handleUpdateCategory();
  }

  // Modal fermeture de la première modal et suppression de categorie
  const handleChangeToDeleteCategorie = () => {
    handleCategorieOption();
    handleDeleteCategory();
  }

  return {
    handleAddNote,
    addNoteModal,
    handleModalAdd,
    addCatNote,
    handleChangeToAddNote,
    addCategorieModal,
    handleAddCategorie,
    handleChangeToAddCategorie,
    categoryModal,
    handleCategorieOption,
    handleChangeToUpdateCategorie,
    handleChangeToDeleteCategorie,
    updateCategory,
    deleteCategory
  };
}

export default useHomeModal;
