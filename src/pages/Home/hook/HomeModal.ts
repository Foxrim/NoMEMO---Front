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

  return { handleNoteModal, addNoteModal, handleCatNoteModal, addCatNote };
}

export default useHomeModal;
