import { useState } from "react";

function useHomeModal() {
  const [addNoteModal, setAddNoteModal] = useState<boolean>(false);
  const [addCatNote, setAddCatNot] = useState<boolean>(false);

  const handleNoteModal = () => {
    setAddNoteModal((prev) => !prev);
  };

  const handleCatNoteModal = () => {
    setAddCatNot((prev) => !prev);
  }

  const handleNoteModalByModal = () => {
     setAddCatNot((prev) => !prev);
     setAddNoteModal((prev) => !prev);
  }

  return { handleNoteModal, addNoteModal, handleCatNoteModal, addCatNote, handleNoteModalByModal };
}

export default useHomeModal;
