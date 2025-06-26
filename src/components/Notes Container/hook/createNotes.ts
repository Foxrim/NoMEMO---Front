import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/Modal/useModal";
import { useCategories } from "../../../contexts/Categories/useCategories";

function useCreateNotes() {
  const { handleNotes } = useModal();
  const { categories } = useCategories();

  const [nameNote, setNameNote] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [nameCategory, setNameCategory] = useState<string>("");
  const [nameStatus, setNameStatus] = useState<string>("");

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const statusArray = ["Aucun", "En cours", "Terminé"];

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

  const fetchCreateNotes = async (e: React.FormEvent) => {
    e.preventDefault();

    if (categoryId === 0) {
      setCategoryId(null);
    }

    if (!isUpdate) {
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
    handleCategoryId,
    nameCategory,
    handleStatus,
    statusArray,
    nameStatus,
    isUpdate
  };
}

export default useCreateNotes;
