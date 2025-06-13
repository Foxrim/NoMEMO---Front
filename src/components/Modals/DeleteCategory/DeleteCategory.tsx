import useCategoriesList from "../AddNote/hook/categoriesList";
import Buttons from "../../Buttons/Buttons";
import Close from "../../Close/Close";
import Select from "../../Select/Select";
import styles from "./DeleteCategory.module.css";
import useDeleteCategory from "./hook/DeteleCategoryHook";

type DeleteCategoryProps = {
  handleDeleteCategory: () => void;
  handleCategorieOption: () => void;
};

export default function DeleteCategory({
  handleDeleteCategory,
  handleCategorieOption,
}: DeleteCategoryProps) {
  const categories = useCategoriesList();
  const { categoryId, setCategoryId, deleteCategory } = useDeleteCategory();

  const switchModal = () => {
    handleDeleteCategory();
    handleCategorieOption();
  };

  return (
    <div className={styles.deleteCategory}>
      <form className={styles.deleteCategoryModal} onSubmit={deleteCategory}>
        <Close
          className={styles.closeDeleteCategory}
          onClick={switchModal}
          newIcon={"fa-solid fa-angles-left"}
        />
        <h2>Suppréssion</h2>
        <Select
          option={"Choisir une catégorie"}
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className={styles.categorySelect}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nameCategory}
            </option>
          ))}
        </Select>

        {categoryId !== undefined && (
          <Buttons className={styles.confirmeDelete}>Confirmer</Buttons>
        )}
      </form>
    </div>
  );
}
