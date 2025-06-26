import { useCategories } from "../../../../contexts/Categories/useCategories";
import { useModal } from "../../../../contexts/Modal/useModal";
import FormInput from "../../../Form Input/FormInput";
import FormModal from "../../../Modals/Form Modal/FormModal";
import Select from "../../../Modals/Select/Select";
import Options from "../../../Options/Options";
import TextArea from "../../../TextArea/TextArea";
import useCreateNotes from "../../hook/createNotes";
import useFormNotes from "../../hook/formNotes";
import styles from "./CreateNotes.module.css";

export default function CreateNotes() {
  const { categories } = useCategories();
  const {
    categoriesCreateNotes,
    handleCategoriesCreateNotes,
    statusCreateNotes,
    handleStatusCreateNotes,
  } = useModal();

  const { fetchCreateNotes } = useCreateNotes();
  const {
    nameNote,
    comment,
    link,
    setNameNote,
    setComment,
    setLink,
    handleCategoryId,
    nameCategory,
    statusArray,
    handleStatus,
    nameStatus,
    isUpdate,
  } = useFormNotes();

  return (
    <>
      <FormModal
        className={styles.createNotes}
        onSubmit={fetchCreateNotes}
        update={isUpdate}
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
          optionChoose={nameCategory || "Aucune"}
          onClick={handleCategoriesCreateNotes}
        />
        <Options
          className={styles.statusCreateNotes}
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
      </FormModal>

      {categoriesCreateNotes && (
        <Select
          classNameSelect={styles.selectCreateNotes}
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
