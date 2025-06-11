import styles from "./RadioDone.module.css";
import xNotDone from "../../assets/square-xmark.png";
import xNotDoneDemi from "../../assets/square-xmark-demi.png";

type RadioDoneProps = {
  value: string;
  setIsDone: React.Dispatch<React.SetStateAction<"done" | "notDone">>;
  isDone: "done" | "notDone";
  className?: string;
};

export default function RadioDone({
  value,
  setIsDone,
  isDone,
  className,
}: RadioDoneProps) {
  return (
    <div className={className}>
      <div className={styles.radioDone}>
        <input
          type="radio"
          name="isDone"
          id="done"
          checked={isDone === "done"}
          onChange={() => setIsDone("done")}
          value={value}
        />
        <i
          className={`fa-regular fa-square-check ${styles.done} ${
            isDone === "done" ? styles.doneChecked : ""
          }`}
          onClick={() => setIsDone("done")}
        ></i>
        <hr />
        <input
          type="radio"
          name="isDone"
          id="notDone"
          checked={isDone === "notDone"}
          onChange={() => setIsDone("notDone")}
          value={value}
        />
        {isDone === "notDone" ? (
          <img
            src={xNotDone}
            alt="croix rouge validé"
            onClick={() => setIsDone("notDone")}
          />
        ) : (
          <img
            src={xNotDoneDemi}
            alt="croix rouge non validé"
            onClick={() => setIsDone("notDone")}
          />
        )}
      </div>
    </div>
  );
}
