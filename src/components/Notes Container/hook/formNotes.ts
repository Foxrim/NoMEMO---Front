import { useEffect, useState } from "react";
import { useCategories } from "../../../contexts/Categories/useCategories";
import { useModal } from "../../../contexts/Modal/useModal";

function useFormNotes() {
  const { categories } = useCategories();
  const { handleUpdateNotes } = useModal();

  const [noteId, setNoteId] = useState<number>();

  const [nameNote, setNameNote] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [nameCategory, setNameCategory] = useState<string>("");
  const [nameStatus, setNameStatus] = useState<string>("");

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const statusArray = ["Aucun", "En cours", "Terminé"];

  const selectedNotes = async (index: number) => {
    setNoteId(index);
    handleUpdateNotes();
  };

  const handleStatus = async (index: number) => {
    if (index === 0) {
      setStatus("");
    } else if (index === 1) {
      setStatus("inProgress");
    } else if (index === 2) {
      setStatus("finished");
    } else {
      setStatus("");
    }
  };

  useEffect(() => {
    if (status === "") {
      setNameStatus("Aucun");
    } else if (status === "inProgress") {
      setNameStatus("En cours");
    } else if (status === "finished") {
      setNameStatus("Terminé");
    } else {
      setNameStatus("Aucun");
    }
  }, [status]);

  const handleCategoryId = async (index: number) => {
    setCategoryId(index);
  };

  useEffect(() => {
    if (categories && categoryId !== null && categoryId !== 0) {
      const name = categories[categoryId]?.nameCategory;
      setNameCategory(`${name}`);
    } else {
      setNameCategory("Aucune");
    }
  }, [categories, categoryId]);

  useEffect(() => {
    if (
      nameNote !== "" ||
      comment !== "" ||
      link !== "" ||
      status !== "" ||
      categoryId !== null
    ) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  }, [nameNote, comment, link, status, categoryId]);

  return {
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
    handleCategoryId,
    nameCategory,
    handleStatus,
    statusArray,
    nameStatus,
    isUpdate,
    selectedNotes,
    noteId
  };
}

export default useFormNotes;
