import Buttons from "../../Buttons/Buttons";
import styles from "./ConfirmModal.module.css";

type ConfirmModalProps = {
  children: React.ReactNode;
  onClickYes?: () => void;
  onClickNo?: () => void;
  action: string;
  classNameYes?: string;
};

export default function ConfirmModal({
  children,
  onClickYes,
  onClickNo,
  action,
  classNameYes
}: ConfirmModalProps) {
  return (
    <div className={styles.confirmModal} onClick={onClickNo}>
      <div className={styles.modalConfirmModal}>
        <h2>{children}</h2>
        <Buttons children="Annuler" onClick={onClickNo} className={styles.buttonNo} />
        <Buttons children={action} onClick={onClickYes} className={classNameYes} />
      </div>
    </div>
  );
}
