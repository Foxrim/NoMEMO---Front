import { useEffect, useState, type ReactNode } from "react";
import { NotesContext, type NotesProps } from "./Notes.context";

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  const fetchNotes = async () => {
    try {
      const res = await fetch(
        "http://localhost:5012/api/v1/notes/find-by-user",
        {
          credentials: "include",
        }
      );

      if (res.ok) {
        const data: NotesProps[] = await res.json();
        setNotes([...data]);
      }
    } catch (err) {
      console.error("Une erreur est survenue :", err);
    }
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
