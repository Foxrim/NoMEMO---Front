import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./CategoryOptions.module.css";

type CategoryOptionsProps = {
    handleCategorieOption: () => void;
    handleUpdateCategory: () => void;
    handleDeleteCategory: () => void;
}

export default function CategoryOptions({ handleCategorieOption, handleUpdateCategory, handleDeleteCategory }: CategoryOptionsProps) {

  const switchModalUpdate = () => {
    handleCategorieOption();
    handleUpdateCategory();
  }

  const switchModalDelete = () => {
    handleCategorieOption();
    handleDeleteCategory();
  }

  return (
    <div className={styles.categoryOptions}>
      <div className={styles.categoryOptionsModal}>
        <Close
          className={styles.closeCategoryOptions}
          onClick={handleCategorieOption}
        />
        <h2>Catégorie</h2>
        <Buttons className={styles.editCategory} onClick={switchModalUpdate}>
          Modifier une catégorie
        </Buttons>
        <Buttons
          className={styles.deleteCategory}
          onClick={switchModalDelete}
        >
          Supprimer une catégorie
        </Buttons>
      </div>
    </div>
  );
}
