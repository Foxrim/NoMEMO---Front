import { useEffect } from "react";
import { useCategories } from "../../../../contexts/Categories/useCategories";
import { useModal } from "../../../../contexts/Modal/useModal";
import FormInput from "../../../Form Input/FormInput";
import FormModal from "../../../Modals/Form Modal/FormModal";
import Select from "../../../Modals/Select/Select";
import Options from "../../../Options/Options";
import TextArea from "../../../TextArea/TextArea";
import useFormNotes from "../../hook/formNotes";
import useUpdateNotes from "../../hook/updateNotes";
import styles from "./UpdateNotes.module.css";
import type {NotesProps} from "../../../../contexts/Notes/Notes.context";

type UpdateNotesProps = {
  note: NotesProps;
};

export default function UpdateNotes({ note }: UpdateNotesProps) {
  const { categories } = useCategories();

  const {
    categoriesCreateNotes,
    handleCategoriesCreateNotes,
    statusCreateNotes,
    handleStatusCreateNotes,
    handleUpdateNotes,
  } = useModal();

  const { setNoteId } = useUpdateNotes();
  const {
    nameNote,
    comment,
    link,
    setNameNote,
    setComment,
    setLink,
    setCategoryId,
    setStatus,
    handleCategoryId,
    nameCategory,
    statusArray,
    handleStatus,
    nameStatus,
    isUpdate,
  } = useFormNotes();

  useEffect(() => {
    setNoteId(note.id);
    setNameNote(note.nameNote);
    setComment(note.comment);
    setCategoryId(note.categoryId);
    setStatus(note.status);
    setLink(note.link);
  });


  return (
    <>
      <FormModal className={styles.updateNotes} update={isUpdate} key={note.id}>
        <FormInput
          placeholder="Titre"
          value={nameNote}
          onChange={(e) => setNameNote(e.target.value)}
        />
        <hr />
        <TextArea
          placeholder={"Comment à taper"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <hr />
        <Options
          className={styles.categorieUpdateNotes}
          nameOption="Catégorie"
          optionChoose={nameCategory ? nameCategory : "Aucune"}
          onClick={handleCategoriesCreateNotes}
        />
        <Options
          className={styles.statusUpdateNotes}
          nameOption="Status"
          optionChoose={nameStatus || "Aucun"}
          onClick={handleStatusCreateNotes}
        />
        <hr />
        <FormInput
          placeholder="Lien"
          className={styles.linkInput}
          icon="fa-regular fa-copy"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <hr />
        <p onClick={handleUpdateNotes}>Créé le {note.createdAt}</p>
        <p>Modifié le {note.updateAt}</p>
      </FormModal>

      {categoriesCreateNotes && (
        <Select
          classNameSelect={styles.selectUpdateNotes}
          className={styles.categories}
          onClick={handleCategoriesCreateNotes}
        >
          {categories.map((category) => (
            <p key={category.id} onClick={() => handleCategoryId(category.id)}>
              {category.nameCategory}
            </p>
          ))}
        </Select>
      )}

      {statusCreateNotes && (
        <Select
          classNameSelect={styles.selectCreateNotes}
          className={styles.status}
          onClick={handleStatusCreateNotes}
        >
          {statusArray.map((status, index) => (
            <p key={index} onClick={() => handleStatus(index)}>
              {status}
            </p>
          ))}
        </Select>
      )}
    </>
  );
}
