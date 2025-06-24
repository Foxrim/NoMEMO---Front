import { useModal } from '../../../../contexts/Modal/useModal';
import useArrangement from '../../hook/arrangement';
import useSort from '../../hook/sort';
import useTheme from '../../hook/theme';
import OptionStyle from './components/OptionStyle';
import styles from './StyleMenu.module.css';

export default function StyleMenu() {
  const { handleArrangement, handleSort, handleTheme } = useModal();
  const { arr } = useArrangement();
  const { sort } = useSort();
  const { theme } = useTheme();

  return (
    <div className={styles.styleMenu}>
      <h3>Style</h3>
      <div className={styles.disposalContainer}>
        <OptionStyle onClick={handleArrangement} nameOption={'Disposition'} optionChoose={arr} />
        <OptionStyle onClick={handleSort} nameOption={'Trier'} optionChoose={sort} />
        <OptionStyle onClick={handleTheme} nameOption={'Aspect'} optionChoose={theme} />
      </div>
    </div>
  );
}
