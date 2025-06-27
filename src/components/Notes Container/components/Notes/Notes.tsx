import { useModal } from "../../../../contexts/Modal/useModal";
import UpdateNotes from "../Update/UpdateNotes";
import styles from "./Notes.module.css";
import type {NotesProps} from "../../../../contexts/Notes/Notes.context";

type NotesType = {
  note: NotesProps;
  onClick?: () => void;
};

export default function Notes({
  onClick,
  note
}: NotesType) {
    const { updateNotes } = useModal();
  return (
    <>
      <div className={styles.notes} onClick={onClick}>
        <h3>{note.nameNote !== null ? note.nameNote : "Sans titre"}</h3>
        <p>{note.comment !== null ? note.comment : "Sans texte"}</p>
        <hr className={styles.hrNotes} />
        {note.status === "finished" ? (
          <i
            className={`fa-solid fa-circle-check ${styles.statusIcon} ${styles.statusFinished}`}
          ></i>
        ) : note.status === "inProgress" ? (
          <i
            className={`fa-solid fa-clock-rotate-left ${styles.statusIcon} ${styles.statusInProgress}`}
          ></i>
        ) : (
          ""
        )}
      </div>

      {updateNotes && <UpdateNotes note={note} />}
    </>
  );
}
