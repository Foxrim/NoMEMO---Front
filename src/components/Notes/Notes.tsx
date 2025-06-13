import styles from "./Notes.module.css";
import xNotDone from "../../assets/square-xmark.png";

type NotesProps = {
  children: React.ReactNode;
  isDone: string;
  noteId: number;
  className?: string;
  onClick?: (noteId: number) => void;
  style?: React.CSSProperties;
  backgroundColor?: string;
  fontColor?: string
};

export default function Notes({ children, isDone, className, onClick, noteId, backgroundColor, fontColor }: NotesProps) {
  return (
    <div className={`${styles.notes} ${className}`} onClick={onClick ? () => onClick(noteId) : undefined} style={{backgroundColor: backgroundColor, color: fontColor}}>
      <p>{children}</p>
      {isDone === "notDone" ? (
        <img src={xNotDone} alt="croix rouge validé" />
      ) : (
        <i className={`fa-regular fa-square-check ${styles.doneNotes}`}></i>
      )}
    </div>
  );
}
