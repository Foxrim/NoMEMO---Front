import { useState } from "react";
import { useModal } from "../../../contexts/Modal/useModal";

function useCreateNotes() {
  const [nameNote, setNameNote] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const { handleNotes } = useModal();

  const fetchCreateNotes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (categoryId === 0) {
      setCategoryId(null);
    }

    if (
      nameNote === "" &&
      comment === "" &&
      link === "" &&
      status === "" &&
      categoryId === null
    ) {
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

      handleNotes();
    } catch (err) {
      console.error("Une erreur est survenue : ", err);
    }
  };

  return {
    fetchCreateNotes,
    nameNote,
    comment,
    link,
    status,
    categoryId,
    setNameNote,
    setComment,
    setLink,
    setStatus,
    setCategoryId,
  };
}

export default useCreateNotes;
