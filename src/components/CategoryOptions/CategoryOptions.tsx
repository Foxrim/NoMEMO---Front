import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import styles from "./CategoryOptions.module.css";

type CategoryOptionsProps = {
    handleCategorieOption: () => void;
    handleChangeToUpdateCategorie: () => void;
    handleChangeToDeleteCategorie: () => void;
}

export default function CategoryOptions({ handleCategorieOption, handleChangeToUpdateCategorie, handleChangeToDeleteCategorie }: CategoryOptionsProps) {
  return (
    <div className={styles.categoryOptions}>
      <div className={styles.categoryOptionsModal}>
        <Close
          className={styles.closeCategoryOptions}
          onClick={handleCategorieOption}
        />
        <h2>Catégorie</h2>
        <Buttons className={styles.editCategory} onClick={handleChangeToUpdateCategorie}>
          Modifier une catégorie
        </Buttons>
        <Buttons
          className={styles.deleteCategory}
          onClick={handleChangeToDeleteCategorie}
        >
          Supprimer une catégorie
        </Buttons>
      </div>
    </div>
  );
}
