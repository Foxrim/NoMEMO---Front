import { useState } from "react";
import useHomeModal from "../../../pages/Home/hook/HomeModal";

function useNewNote() {
    const [nameNote, setNameNote] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [categoryId, setCategoryId] = useState<number>();
    const [isDone, setIsDone] = useState<"done" | "notDone">("notDone");

    const { handleNoteModal } = useHomeModal();

    const createNote = async () => {
        await fetch('http://localhost:5012/api/v1/notes/create', {
            method: "POST",
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify({ nameNote, comment, link, isDone, categoryId }),
            credentials: "include"
        });

        handleNoteModal();
    }

    return { createNote, setNameNote, setComment, setLink, setIsDone, setCategoryId, nameNote, comment, link, isDone, categoryId } ;
}

export default useNewNote;