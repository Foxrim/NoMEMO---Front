import { useState } from "react";

function useHomeModal() {
  const [addNoteModal, setAddNoteModal] = useState<boolean>(false);
  const [addCatNote, setAddCatNot] = useState<boolean>(false);
  const [addCategorieModal, setAddCategorieModal] = useState<boolean>(false);

  const handleNoteModal = () => {
    setAddNoteModal((prev) => !prev);
  };

  const handleCatNoteModal = () => {
    setAddCatNot((prev) => !prev);
  };

  const handleCategorieModal = () => {
    setAddCategorieModal((prev) => !prev);
  };

  const handleNoteModalByModal = () => {
    handleCatNoteModal();
    handleNoteModal();
  };

  const handleCategorieModalByModal = () => {
    handleCatNoteModal();
    handleCategorieModal();
  };

  return {
    handleNoteModal,
    addNoteModal,
    handleCatNoteModal,
    addCatNote,
    handleNoteModalByModal,
    addCategorieModal,
    handleCategorieModal,
    handleCategorieModalByModal,
  };
}

export default useHomeModal;
