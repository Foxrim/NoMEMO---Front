import Buttons from "../../Buttons/Buttons";
import Close from "../../Close/Close";
import TextInput from "../../Inputs/Text/TextInput";
import RadioDone from "../../RadioDone/RadioDone";
import Select from "../../Select/Select";
import TextArea from "../../TextArea/TextArea";
import styles from "./UpdateNote.module.css";
import useUpdateNote from "./hook/UpdateNoteHook";
import useCategoriesList from "../AddNote/hook/categoriesList";
import { useEffect } from "react";

type UpdateNoteProps = {
  handleUpdateNoteClose: () => void;
  noteId: number;
  nameNote: string;
  isDone: "done" | "notDone";
  comment: string;
  categoryId: number;
  link: string;
};

export default function UpdateNote({
  handleUpdateNoteClose,
  noteId,
  nameNote,
  isDone,
  comment,
  categoryId,
  link,
}: UpdateNoteProps) {
  const categories = useCategoriesList();
  const {
    setNoteId,
    setNameNote,
    setIsDone,
    setComment,
    setCategoryId,
    setLink,
    updateNote,
  } = useUpdateNote();

  useEffect(() => {
    if (noteId) {
      setNoteId(noteId);
    }
  }, [noteId, setNoteId]);

  return (
    <div className={styles.updateNote}>
      <form className={styles.updateNoteModal} onSubmit={updateNote}>
        <Close
          className={styles.closeUpdateNote}
          onClick={handleUpdateNoteClose}
          newIcon={"fa-solid fa-angles-left"}
        />
        <h2>Modification</h2>

        <TextInput
          className={styles.itemsForm}
          type="text"
          placeholder="Titre de la note"
          value={nameNote}
          onChange={(e) => setNameNote(e.target.value)}
        />

        <RadioDone
          value={isDone}
          setIsDone={setIsDone}
          isDone={isDone}
          className={styles.radioDone}
        />

        <TextArea
          placeholder="Description"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.textAreaUpdateNote}
        />

        <Select
          option="Catégorie"
          value={Number(categoryId)}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className={styles.selectUpdateNote}
        >
          {categories.map((category, idx) =>
            idx === 0 && category.id === 0 ? (
              <option key={category.id} value={category.id} disabled>
                {category.nameCategory}
              </option>
            ) : (
              <option key={category.id} value={category.id}>
                {category.nameCategory}
              </option>
            )
          )}
        </Select>

        <TextInput
          className={styles.itemsForm}
          type="text"
          placeholder="Lien"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <Buttons
          className={`${styles.itemsForm} ${styles.buttonUpdateNote}`}
          type="submit"
        >
          Valider
          <i className={`fa-solid fa-plus ${styles.updateIcon}`}></i>
        </Buttons>
      </form>
    </div>
  );
}
