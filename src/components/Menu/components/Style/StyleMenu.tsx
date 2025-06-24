import { useModal } from '../../../../contexts/Modal/useModal';
import useArrangement from '../../hook/arrangement';
import useSort from '../../hook/sort';
import OptionStyle from './components/OptionStyle';
import styles from './StyleMenu.module.css';

export default function StyleMenu() {
  const { handleArrangement } = useModal();
  const { arr } = useArrangement();
  const { sort } = useSort();

  return (
    <div className={styles.styleMenu}>
      <h3>Style</h3>
      <div className={styles.disposalContainer}>
        <OptionStyle onClick={handleArrangement} nameOption={'Disposition'} optionChoose={arr} />
        <OptionStyle nameOption={'Trier'} optionChoose={sort} />
        <OptionStyle nameOption={'Aspect'} optionChoose={'Sombre'} />
      </div>
    </div>
  );
}
