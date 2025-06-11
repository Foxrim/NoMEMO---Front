import styles from "./Notes.module.css";
import xNotDone from "../../assets/square-xmark.png";

type NotesProps = {
  children: React.ReactNode;
  isDone: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export default function Notes({ children, isDone, className, onClick, style }: NotesProps) {
  return (
    <div className={`${styles.notes} ${className}`} onClick={onClick} style={style}>
      <p>{children}</p>
      {isDone === "notDone" ? (
        <img src={xNotDone} alt="croix rouge validé" />
      ) : (
        <i className={`fa-regular fa-square-check ${styles.doneNotes}`}></i>
      )}
    </div>
  );
}
