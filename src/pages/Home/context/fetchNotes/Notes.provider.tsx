import { useEffect, useState, type ReactNode } from "react";
import { NotesContext } from "./Notes.context";
import type { NotesProps } from "./Notes.context";

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  const fetchNotes = async () => {
    await fetch("http://localhost:5012/api/v1/notes/find-by-user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data: NotesProps[]) => setNotes(data));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, fetchNotes }}>
      {children}
    </NotesContext.Provider>
  );
}
