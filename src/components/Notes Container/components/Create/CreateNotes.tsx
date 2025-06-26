import { useCategories } from "../../../../contexts/Categories/useCategories";
import FormInput from "../../../Form Input/FormInput";
import FormModal from "../../../Modals/Form Modal/FormModal";
import Select from "../../../Modals/Select/Select";
import Options from "../../../Options/Options";
import TextArea from "../../../TextArea/TextArea";
import useCreateNotes from "../../hook/createNotes";
import styles from "./CreateNotes.module.css";

export default function CreateNotes() {
  const {
    fetchCreateNotes,
    nameNote,
    comment,
    link,
    setNameNote,
    setComment,
    setLink,
  } = useCreateNotes();

  const { categories } = useCategories();

  return (
    <>
      <FormModal
        className={styles.createNotes}
        onSubmit={() => fetchCreateNotes}
      >
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
          className={styles.categorieCreateNotes}
          nameOption="Catégorie"
          optionChoose="Aucune"
        />
        <Options
          className={styles.statusCreateNotes}
          nameOption="Status"
          optionChoose="Aucun"
        />
        <hr />
        <FormInput
          placeholder="Lien"
          className={styles.linkInput}
          icon="fa-regular fa-copy"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </FormModal>

      <Select classNameSelect={styles.categoriesCreateNotes} className={styles.categories}>
        {categories.map((category, index) => (
            <p key={index}  >{category.nameCategory}</p>
        ))}
      </Select>
    </>
  );
}
