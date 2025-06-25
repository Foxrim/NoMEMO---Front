import { useModal } from "../../../../contexts/Modal/useModal";
import Select from "../../../Modals/Select/Select";
import Options from "../../../Options/Options";
import useArrangement from "../../hook/arrangement";
import useSort from "../../hook/sort";
import useTheme from "../../hook/theme";
import styles from "./StyleMenu.module.css";

export default function StyleMenu() {
  const {
    handleArrangement,
    handleSort,
    handleTheme,
    arrangement,
    sortModal,
    themeModal,
  } = useModal();
  const { arr } = useArrangement();
  const { sort } = useSort();
  const { theme } = useTheme();

  const { arrangements, handleUpdateArr } = useArrangement();
  const { sorts, handleUpdateSort } = useSort();
  const { themes, handleUpdateTheme } = useTheme();

  return (
    <div className={styles.styleMenu}>
      <h3>Style</h3>
      <div className={styles.disposalContainer}>
        <Options
          onClick={handleArrangement}
          nameOption={"Disposition"}
          optionChoose={arr}
        />
        <Options
          onClick={handleSort}
          nameOption={"Trier"}
          optionChoose={sort}
        />
        <Options
          onClick={handleTheme}
          nameOption={"Aspect"}
          optionChoose={theme}
        />
      </div>

      {arrangement && (
        <Select className={styles.arrangementModal} onClick={handleArrangement}>
          {arrangements.map((arr, index) => (
            <p key={index} onClick={() => handleUpdateArr(index)}>
              {arr}
            </p>
          ))}
        </Select>
      )}

      {sortModal && (
        <Select className={styles.sortModal} onClick={handleSort}>
          {sorts.map((sort, index) => (
            <p key={index} onClick={() => handleUpdateSort(index)}>
              {sort}
            </p>
          ))}
        </Select>
      )}

      {themeModal && (
        <Select className={styles.themeModal} onClick={handleTheme}>
          {themes.map((theme, index) => (
            <p key={index} onClick={() => handleUpdateTheme(index)}>
              {theme}
            </p>
          ))}
        </Select>
      )}
    </div>
  );
}
