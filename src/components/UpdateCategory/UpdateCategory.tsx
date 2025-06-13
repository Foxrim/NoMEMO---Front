import useColorList from "../AddCategorie/hook/ColorsList";
import useCategoriesList from "../AddNote/hook/categoriesList";
import Buttons from "../Buttons/Buttons";
import Close from "../Close/Close";
import TextInput from "../Inputs/Text/TextInput";
import Select from "../Select/Select";
import useUpdateCategory from "./hook/UpdateCategoryHook";
import styles from "./UpdateCategory.module.css";

type UpdateCategoryProps = {
  handleUpdateCategoryClose: () => void;
};

export default function UpdateCategory({
  handleUpdateCategoryClose,
}: UpdateCategoryProps) {
  const categories = useCategoriesList();
  const colors = useColorList();
  const {
    categoryId,
    setCategoryId,
    nameCategory,
    setNameCategory,
    colorId,
    setColorId,
    updateCategory
  } = useUpdateCategory();

  return (
    <div className={styles.updateCategory}>
      <form className={styles.updateCategoryModal} onSubmit={updateCategory}>
        <Close
          className={styles.closeUpdateCategory}
          onClick={handleUpdateCategoryClose}
        />
        <h2>Modification</h2>
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
          <>
            {categories
              .filter((category) => category.id === categoryId)
              .map((category) => (
                <div key={category.id} className={styles.wrappedUpdateCategory}>
                  <TextInput
                    value={nameCategory}
                    onChange={(e) => setNameCategory(e.target.value)}
                    className={styles.categoryName}
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
                          colors.find((c) => c.id === colorId)
                            ?.backgroundColor || "#fff",
                      }}
                    />
                  </div>
                </div>
              ))}

            <Buttons className={styles.confirmeUpdate}>Confirmer</Buttons>
          </>
        )}
      </form>
    </div>
  );
}
