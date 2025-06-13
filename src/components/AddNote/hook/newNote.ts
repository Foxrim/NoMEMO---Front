import { useState } from "react";
import { useModal } from "../../../pages/Home/context/Modal/useModal";
import { useNotes } from "../../../pages/Home/context/fetchNotes/useNotes";

function useNewNote() {
  const [nameNote, setNameNote] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>();
  const [isDone, setIsDone] = useState<"done" | "notDone">("notDone");

  const { handleAddNote } = useModal();
  const { fetchNotes } = useNotes();

  const createNote = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5012/api/v1/notes/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameNote, comment, link, isDone, categoryId }),
      credentials: "include",
    });

    if (res.ok) {
        handleAddNote();
        fetchNotes();
    }
  };

  return {
    createNote,
    setNameNote,
    setComment,
    setLink,
    setIsDone,
    setCategoryId,
    nameNote,
    comment,
    link,
    isDone,
    categoryId,
  };
}

export default useNewNote;
