import { createContext } from "react";


type ModalContextProps = {
    handleAddNote: () => void;
    addNoteModal: boolean;
    handleModalAdd: () => void;
    addCatNote: boolean;
    handleChangeToAddNote: () => void;
    addCategorieModal: boolean;
    handleAddCategorie: () => void;
    handleChangeToAddCategorie: () => void;
    categoryModal: boolean;
    handleCategorieOption: () => void;
    handleChangeToUpdateCategorie: () => void;
    handleChangeToDeleteCategorie: () => void;
    updateCategory: boolean;
    deleteCategory: boolean;
    handleUpdateCategoryClose: () => void;
    setUpdateCategory: React.Dispatch<React.SetStateAction<boolean>>;
    handleDeleteCategory: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);