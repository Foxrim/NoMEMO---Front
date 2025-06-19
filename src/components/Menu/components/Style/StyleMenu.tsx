import Disposal from './components/Disposal';
import styles from './StyleMenu.module.css';

export default function StyleMenu() {
  return (
    <div className={styles.styleMenu}>
      <h3>Style</h3>
      <div className={styles.disposalContainer}>
        <Disposal nameOption={'Disposition'} optionChoose={'Affichage grille'} />
        <Disposal nameOption={'Trier'} optionChoose={'Trier par date de création'} />
        <Disposal nameOption={'Aspect'} optionChoose={'Sombre'} />
      </div>
    </div>
  );
}
