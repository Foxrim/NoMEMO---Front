import { useEffect, useState } from "react";

interface DoneProps {
  done?: string;
  notDone: string;
}

type NotesProps = {
  nameNote: string;
  comment?: string;
  link?: string;
  isDone: DoneProps;
  createdAt: Date;
  categoryId?: number;
};

function useHomeHook() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const [addNoteModal, setAddNoteModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchNotes = async () => {
      await fetch(
        "http://localhost:5012/api/v1/notes/find-by-user",
        {
          credentials: "include",
        }
      )
      .then((res) => res.json())
      .then((data: NotesProps[]) => setNotes(data));
    };

    fetchNotes();
  }, []);
  
  const handleNoteModal = () => {
    setAddNoteModal((prev) => !prev);
  }

  return { notes, handleNoteModal, addNoteModal };
}

export default useHomeHook;
