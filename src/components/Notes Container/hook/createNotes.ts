import { useModal } from "../../../contexts/Modal/useModal";
import { useNotes } from "../../../contexts/Notes/useNotes";
import useFormNotes from "./formNotes";

function useCreateNotes() {
  const { handleCreateNotes } = useModal();
  const { fetchNotes } = useNotes();

  const {
    nameNote,
    comment,
    link,
    status,
    categoryId,
    setCategoryId,
    isUpdate,
  } = useFormNotes();

  const fetchCreateNotes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (categoryId === 0) {
      setCategoryId(null);
    }

    if (!isUpdate) {
      handleCreateNotes();
      return;
    }

    try {
      const res = await fetch("http://localhost:5012/api/v1/notes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameNote, comment, link, status, categoryId }),
        credentials: "include",
      });

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
    fetchCreateNotes,
  };
}

export default useCreateNotes;
