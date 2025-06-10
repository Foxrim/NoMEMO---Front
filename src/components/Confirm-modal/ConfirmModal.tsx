import Buttons from "../Buttons/Buttons";
import styles from "./ConfirmModal.module.css";

type ConfirmModalProps = {
  onClick: () => void;
  children: React.ReactNode;
  onClickYes: () => void;
  onClickNo: () => void;
};

export default function ConfirmModal({
  onClick,
  children,
  onClickYes,
  onClickNo,
}: ConfirmModalProps) {
  return (
    <div className={styles.confirmModal}>
      <div className={styles.modalConfirmModal}>
        <i
          className={`fa-solid fa-xmark ${styles.closeAccount}`}
          onClick={onClick}
        ></i>
        <h2>{children}</h2>
        <Buttons children="Oui" onClick={onClickYes} />
        <Buttons children="Non" onClick={onClickNo} />
      </div>
    </div>
  );
}
