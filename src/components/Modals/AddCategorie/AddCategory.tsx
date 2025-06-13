import Buttons from "../../Buttons/Buttons";
import Close from "../../Close/Close";
import TextInput from "../../Inputs/Text/TextInput";
import Select from "../../Select/Select";
import styles from "./AddCategory.module.css";
import useColorList from "./hook/ColorsList";
import useNewCategory from "./hook/NewCategory";

type AddCategorieProps = {
  handleModalAdd: () => void;
  handleAddCategory: () => void;
};

export default function AddCategorie({
  handleAddCategory,
  handleModalAdd,
}: AddCategorieProps) {
  const colors = useColorList();
  const { colorId, setColorId, nameCategory, setNameCategory, createCategory } =
    useNewCategory();

  const switchModal = () => {
    handleAddCategory();
    handleModalAdd();
  };

  return (
    <div className={styles.addCategory}>
      <form className={styles.addCategoryModal} onSubmit={createCategory}>
        <Close
          className={styles.closeAddCategory}
          onClick={switchModal}
          newIcon={"fa-solid fa-angles-left"}
        />
        <h2>Nouvelle catérogie</h2>

        <TextInput
          className={styles.itemsForm}
          type="text"
          placeholder="Titre de la catégorie"
          value={nameCategory}
          onChange={(e) => setNameCategory(e.target.value)}
        />

        <div className={styles.selectColorWrapper}>
          <Select
            option="Couleur"
            classNameSelect={styles.selectColor}
            value={colorId}
            onChange={(e) => setColorId(Number(e.target.value))}
          >
            {colors.map((color) => (
              <option key={color.id} value={color.id}>
                {color.nameColor}
              </option>
            ))}
          </Select>
          <span
            className={styles.colorIcon}
            style={{
              backgroundColor:
                colors.find((c) => c.id === colorId)?.backgroundColor || "#fff",
            }}
          />
        </div>

        <Buttons
          className={`${styles.itemsForm} ${styles.buttonAddNote}`}
          type="submit"
        >
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      </form>
    </div>
  );
}
