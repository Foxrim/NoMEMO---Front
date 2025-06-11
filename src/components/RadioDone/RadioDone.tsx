import styles from "./RadioDone.module.css";
import xNotDone from "../../assets/square-xmark.png";
import xNotDoneDemi from "../../assets/square-xmark-demi.png";
import { useState } from "react";

export default function RadioDone() {
  const [isDone, setIsDone] = useState<"done" | "notDone">("notDone");

  return (
    <div className={styles.radioDone}>
      <input
        type="radio"
        name="isDone"
        id="done"
        checked={isDone === "done"}
        onChange={() => setIsDone("done")}
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
      />
      {isDone === "notDone" ? (
        <img src={xNotDone} alt="croix rouge validé" onClick={() => setIsDone("notDone")} />
      ) : (
        <img src={xNotDoneDemi} alt="croix rouge non validé" onClick={() => setIsDone("notDone")} />
      )}
    </div>
  );
}
