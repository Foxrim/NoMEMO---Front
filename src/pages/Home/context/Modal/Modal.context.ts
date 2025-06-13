import { createContext } from "react";


type ModalContextProps = {
    handleAddNote: () => void;
    addNoteModal: boolean;
    handleModalAdd: () => void;
    addCatNote: boolean;
    addCategorieModal: boolean;
    handleAddCategory: () => void;
    categoryModal: boolean;
    handleCategorieOption: () => void;
    updateCategory: boolean;
    deleteCategory: boolean;
    handleUpdateCategory: () => void;
    setUpdateCategory: React.Dispatch<React.SetStateAction<boolean>>;
    handleDeleteCategory: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);