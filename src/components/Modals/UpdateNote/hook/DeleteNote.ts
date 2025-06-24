import { useState } from "react";
import { useNotes } from "../../../../pages/Home/context/fetchNotes/useNotes";
import { useModal } from "../../../../contexts/Modal/useModal";

function useDeleteNote() {
  const [noteDeleteId, setNoteDeleteId] = useState<number>();

  const { handleUpdateNoteClose } = useModal();
  const { fetchNotes } = useNotes();

  const deleteNote = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5012/api/v1/notes/${noteDeleteId}/delete`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (res.ok) {
      handleUpdateNoteClose();
      fetchNotes();
    }
  };

  return { setNoteDeleteId, deleteNote };
}

export default useDeleteNote;
