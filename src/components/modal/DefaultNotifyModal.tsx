import { NotifyModalProps } from "../../types/notify.types";
import ModalIcon from "../common/ModalIcon";

const DefaultNotifyModal = ({ modal }: { modal: NotifyModalProps }) => {
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
    variant,
    allowOutsideClick,
    animation,
    resolve,
    reject,
  } = modal;

  // Handles the modal dismiss logic when clicking close
  const handleClose = () => (allowOutsideClick ? reject?.("dismiss") : null);

  return (
    <div
      className={`notify-modal-overlay ${open ? "open" : ""}`}
      onClick={handleClose}
      style={style?.overlay ?? {}}
    >
      <div
        className={`notify-modal-container notify-modal-${size} ${animation} ${
          themeMode == "dark" ? "notify-theme-dark" : ""
        }`}
        style={style?.modal ?? {}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================== Header Section ================== */}
        <div
          className={"notify-default-modal-header"}
          style={style?.modalHeader ?? {}}
        >
          {/* Close Icon */}
          {showCancelIcon && (
            <div
              className={"notify-modal-cancel-icon"}
              onClick={() => reject?.("dismiss")}
              aria-label="Close"
            >
              {cancelIcon}
            </div>
          )}
        </div>

        {/* ================== Icon Section ================== */}
        <ModalIcon modal={modal} />

        {/* Modal Title */}
        <div
          className={"notify-default-modal-title"}
          style={style?.title ?? {}}
        >
          {title}
        </div>
        {/* ================== Message Section ================== */}
        <p
          className={"notify-default-modal-message"}
          style={style?.message ?? {}}
        >
          {message}
        </p>

        {/* ================== Action Buttons ================== */}
        <div
          className={"notify-default-modal-button-container"}
          style={style?.buttonContainer ?? {}}
        >
          {showCancelButton && (
            <button
              className={`notify-modal-button notify-modal-cancel`}
              onClick={() => reject?.("dismiss")}
              style={style?.button ?? {}}
            >
              {cancelButtonText}
            </button>
          )}
          {showConfirmButton && (
            <button
              className={`notify-modal-button notify-modal-confirm-${status}`}
              onClick={() => resolve?.("confirm")}
              style={style?.button ?? {}}
            >
              {confirmButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultNotifyModal;
