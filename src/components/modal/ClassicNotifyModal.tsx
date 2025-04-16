import { NotifyModalProps } from "../../types/notify.types";
import styles from "../../style/classicModal.module.css";

const ClassicNotifyModal = ({ modal }: { modal: NotifyModalProps }) => {
  const {
    open,
    title,
    message,
    status,
    size,
    icon,
    showConfirmButton,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    showCancelIcon,
    cancelIcon,
    style,
    themeMode,
    // allowOutsideClick,
    resolve,
    reject,
  } = modal;

  // Handles the modal dismiss logic when clicking close
  const handleClose = () => modal.reject?.("dismiss");

  const statusClass =
    styles[`notify-bold-${status}`] || styles["notify-bold-default"];
  const sizeClass = styles[`notify-bold-${size}`] || styles["notify-bold-sm"];
  const themeClass =
    themeMode === "dark" ? styles["notify-bold-theme-dark"] : "";

  return (
    <div
      className={`${styles["notify-bold-overlay"]} ${open ? styles.open : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles["notify-bold-modal"]} ${statusClass} ${sizeClass} ${themeClass}`}
        style={style?.modal ?? {}}
      >
        <div className={styles["notify-bold-header"]}>
          <div className={styles["notify-bold-title"]}>
            {icon && <span className={styles["notify-bold-icon"]}>{icon}</span>}
            {title}
          </div>
          {showCancelIcon && (
            <span
              className={styles["notify-bold-cancel-icon"]}
              onClick={() => reject?.("dismiss")}
            >
              {cancelIcon || "×"}
            </span>
          )}
        </div>
        <div className={styles["notify-bold-message"]}>{message}</div>
        <div className={styles["notify-bold-button-container"]}>
          {showCancelButton && (
            <button
              className={`${styles["notify-bold-button"]} ${styles["notify-bold-cancel"]}`}
              onClick={() => reject?.("dismiss")}
            >
              {cancelButtonText}
            </button>
          )}
          {showConfirmButton && (
            <button
              className={`${styles["notify-bold-button"]} ${styles["notify-bold-confirm"]}`}
              onClick={() => resolve?.("confirm")}
            >
              {confirmButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassicNotifyModal;
