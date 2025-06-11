import Buttons from "../Buttons/Buttons";
import TextInput from "../Inputs/Text/TextInput";
import RadioDone from "../RadioDone/RadioDone";
import styles from "./AddNote.module.css";
import useCategoriesList from "./hook/categoriesList";
import useNewNote from "./hook/newNote";

type AddNoteProps = {
  handleNoteModal: () => void;
};

export default function AddNote({ handleNoteModal }: AddNoteProps) {
  const categories = useCategoriesList();
  const {
    createNote,
    setNameNote,
    setComment,
    setLink,
    setIsDone,
    setCategoryId,
    nameNote,
    comment,
    link,
    isDone,
    categoryId,
  } = useNewNote();

  return (
    <div className={styles.addNote}>
      <form className={styles.addNoteModal} onSubmit={createNote}>
        <i
          className={`fa-solid fa-xmark ${styles.closeAddNote}`}
          onClick={handleNoteModal}
        ></i>
        <h2>Ajouter une note</h2>

        <TextInput
          className={styles.itemsForm}
          type="text"
          placeholder="Titre de la note"
          value={nameNote}
          onChange={(e) => setNameNote(e.target.value)}
        />

        <RadioDone value={isDone} setIsDone={setIsDone} isDone={isDone} />

        <textarea
          placeholder="Description"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
           <option unselectable="on">
              Catégorie
            </option>
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
        </select>

        <TextInput
          className={styles.itemsForm}
          type="text"
          placeholder="Lien"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <Buttons className={styles.itemsForm} type="submit">
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      </form>
    </div>
  );
}
