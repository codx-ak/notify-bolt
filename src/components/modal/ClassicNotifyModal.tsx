import { NotifyModalProps } from "../../types/notify.types";
import IconClose from "../../assets/CloseIcon";
import ModalIcon from "../common/ModalIcon";

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
    variant,
    allowOutsideClick,
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
        className={`notify-modal-container notify-modal-${size} ${
          themeMode == "dark" ? "notify-theme-dark" : ""
        }`}
        style={style?.modal ?? {}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================== Header Section ================== */}
        <div className={"notify-modal-header"} style={style?.modalHeader ?? {}}>
          {/* Modal Title */}
          <div
            className={"notify-classic-modal-title"}
            style={style?.title ?? {}}
          >
            {title}
          </div>

          {/* Close Icon */}
          {showCancelIcon && (
            <div
              className={"notify-modal-cancel-icon"}
              onClick={() => reject?.("dismiss")}
              aria-label="Close"
            >
              {cancelIcon ?? <IconClose />}
            </div>
          )}
        </div>

        {/* ================== Icon Section ================== */}
        <ModalIcon
          icon={icon}
          status={status}
          style={style?.icon ?? {}}
          variant={variant}
        />

        {/* ================== Message Section ================== */}
        <p
          className={"notify-classic-modal-message"}
          style={style?.message ?? {}}
        >
          {message}
        </p>

        {/* ================== Action Buttons ================== */}
        <div
          className={"notify-classic-modal-button-container"}
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
              className={`notify-modal-button notify-modal-confirm`}
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

export default ClassicNotifyModal;
