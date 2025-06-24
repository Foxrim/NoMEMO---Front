import { useModal } from '../../../../contexts/Modal/useModal';
import OptionStyle from './components/OptionStyle';
import styles from './StyleMenu.module.css';

export default function StyleMenu() {
  const { handleArrangement } = useModal();

  return (
    <div className={styles.styleMenu}>
      <h3>Style</h3>
      <div className={styles.disposalContainer}>
        <OptionStyle onClick={handleArrangement} nameOption={'Disposition'} optionChoose={'Affichage grille'} />
        <OptionStyle nameOption={'Trier'} optionChoose={'Trier par date de création'} />
        <OptionStyle nameOption={'Aspect'} optionChoose={'Sombre'} />
      </div>
    </div>
  );
}
