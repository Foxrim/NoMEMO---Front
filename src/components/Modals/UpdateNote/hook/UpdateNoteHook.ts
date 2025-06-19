import { useState } from "react";
import { useModal } from "../../../../pages/NotesPage/Modal/useModal";
import { useNotes } from "../../../../pages/Home/context/fetchNotes/useNotes";

function useUpdateNote() {
  const [noteId, setNoteId] = useState<number>();
  const [nameNote, setNameNote] = useState<string>("");
  const [isDone, setIsDone] = useState<"done" | "notDone">("notDone");
  const [comment, setComment] = useState<string | undefined>("");
  const [categoryId, setCategoryId] = useState<number>();
  const [link, setLink] = useState<string | undefined>();

  const { handleUpdateNoteClose } = useModal();
  const { fetchNotes } = useNotes();

  const updateNote = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5012/api/v1/notes/${noteId}/modify`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameNote, isDone, comment, categoryId, link }),
        credentials: "include",
      }
    );

    if (res.ok) {
      handleUpdateNoteClose();
      fetchNotes();
    }
  };

  return {
    setNoteId,
    setNameNote,
    setIsDone,
    setComment,
    setCategoryId,
    setLink,
    updateNote,
    nameNote,
    isDone,
    comment,
    categoryId,
    link,
  };
}

export default useUpdateNote;
