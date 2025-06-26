import { useContext } from "react";
import { NotesContext } from "./Notes.context";

export const useNotes = () => {
    const context = useContext(NotesContext);
     if (!context) {
        throw new Error("useNotes doit être utilisé avec NotesProvider");
    }
    return context;
}