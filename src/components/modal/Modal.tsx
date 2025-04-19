import { NotifyModalProps } from "../../types/notify.types";
import ClassicNotifyModal from "./ClassicNotifyModal";
import DefaultNotifyModal from "./DefaultNotifyModal";

const Modal = ({ modal }: { modal: NotifyModalProps }) => {
  // render modal
  const renderModalVariant = () => {
    switch (modal.variant ?? "classic") {
      case "classic":
        return (
          <ClassicNotifyModal
            modal={{
              ...modal,
              variant: "classic",
              showConfirmButton: false,
              showCancelButton: false,
              showCancelIcon: true,
            }}
          />
        );
      case "default":
        return (
          <DefaultNotifyModal
            modal={{
              ...modal,
              variant: "default",
              showConfirmButton: true,
              showCancelButton: true,
              showCancelIcon: false,
            }}
          />
        );
      default:
        return (
          <DefaultNotifyModal
            modal={{
              ...modal,
              variant: "default",
              showConfirmButton: true,
              showCancelButton: true,
              showCancelIcon: false,
            }}
          />
        );
    }
  };

  // Handles the modal dismiss logic when clicking close
  const handleClose = () =>
    modal.allowOutsideClick ? modal.reject?.("dismiss") : null;
  return (
    <div
      className={`notify-modal-overlay ${modal.open ? "open" : ""}`}
      onClick={handleClose}
      style={modal.style?.overlay ?? {}}
    >
      <div
        className={`notify-modal-container notify-modal-${modal.size} ${
          modal.animation
        } ${modal.themeMode == "dark" ? "notify-theme-dark" : ""}`}
        style={modal.style?.modal ?? {}}
        onClick={(e) => e.stopPropagation()}
      >
        {renderModalVariant()}
      </div>
    </div>
  );
};

export default Modal;
