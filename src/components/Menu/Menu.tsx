import { useModal } from "../../contexts/Modal/useModal";
import Buttons from "../Buttons/Buttons";
import Select from "../Modals/Select/Select";
import AccountMenu from "./components/Account/AccountMenu";
import ConfidentMenu from "./components/Confident/ConfidentMenu";
import StyleMenu from "./components/Style/StyleMenu";
import useArrangement from "./hook/arrangement";
import useLogout from "./hook/logout";
import useSort from "./hook/sort";
import useTheme from "./hook/theme";
import styles from "./Menu.module.css";

export default function Menu() {
  const { handleMenu, arrangement, handleArrangement, sortModal, handleSort, themeModal, handleTheme } = useModal();
  const { handleLogout } = useLogout();
  const { arrangements, handleUpdateArr } = useArrangement();
  const { sorts, handleUpdateSort } = useSort();
  const { themes, handleUpdateTheme } = useTheme();

  return (
    <div className={styles.menu}>
      <i
        onClick={handleMenu}
        className={`fa-solid fa-chevron-left ${styles.exitOption}`}
      ></i>
      <h2>Options</h2>
      <StyleMenu />
      <AccountMenu />
      <ConfidentMenu />
      <Buttons onClick={handleLogout}>Déconnection</Buttons>
      <p className={styles.deleteAccount}>Supprimer le compte</p>

      {arrangement && (
        <Select className={styles.arrangementModal} onClick={handleArrangement}>
        {arrangements.map((arr, index) => (
          <p key={index} onClick={() => handleUpdateArr(index)}>{arr}</p>
        ))}
      </Select>
      )}

      {sortModal && (
        <Select className={styles.sortModal} onClick={handleSort}>
        {sorts.map((sort, index) => (
          <p key={index} onClick={() => handleUpdateSort(index)}>{sort}</p>
        ))}
      </Select>
      )}

      {themeModal && (
        <Select onClick={handleTheme} >
          {themes.map((theme, index) => (
            <p key={index} onClick={() => handleUpdateTheme(index)}>{theme}</p>
          ))}
        </Select>
      )}

    </div>
  );
}
