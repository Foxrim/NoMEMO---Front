import { useNotes } from "../../../contexts/Notes/useNotes";
import { useModal } from "../../../contexts/Modal/useModal";
import useFormNotes from "./formNotes";
import { useState } from "react";

function useUpdateNotes() {
  const { handleCreateNotes } = useModal();
  const { fetchNotes } = useNotes();

  const [noteId, setNoteId] = useState<number>();

  const {
    nameNote,
    comment,
    link,
    status,
    categoryId,
    setCategoryId,
    isUpdate,
  } = useFormNotes();

  const fetchUpdateNotes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (categoryId === 0) {
      setCategoryId(null);
    }

    if (!isUpdate) {
      handleCreateNotes();
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5012/api/v1/notes/${noteId}/modify`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nameNote, comment, link, status, categoryId }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Réponse non valide :", res.status, text);
        return;
      }

      handleCreateNotes();
      fetchNotes();
    } catch (err) {
      console.error("Une erreur est survenue : ", err);
    }
  };

  return {
    fetchUpdateNotes,
    nameNote,
    comment,
    link,
    status,
    categoryId,
    setCategoryId,
    isUpdate,
    setNoteId
  };
}

export default useUpdateNotes;
