import { NotifyProps } from "../types/notify.types";
import ClassicVariant from "../components/variants/ClassicVariant";
import DefaultVariant from "../components/variants/DefaultVariant";
import MinimalVariant from "../components/variants/MinimalVariant";

const Modal = ({ modal }: { modal: NotifyProps }) => {
  // render modal
  const renderModalVariant = () => {
    switch (modal.variant) {
      case "classic":
        return (
          <ClassicVariant
            modal={{
              ...modal,
              showConfirmButton: modal.showConfirmButton ?? false,
              showCancelButton: modal.showCancelButton ?? false,
              showCancelIcon: modal.showCancelIcon ?? true,
            }}
          />
        );
      case "minimal":
        return (
          <MinimalVariant
            modal={{
              ...modal,
              showConfirmButton: modal.showConfirmButton ?? true,
              showCancelButton: modal.showCancelButton ?? true,
              showCancelIcon: modal.showCancelIcon ?? false,
            }}
          />
        );
      default:
        return (
          <DefaultVariant
            modal={{
              ...modal,
              showConfirmButton: modal.showConfirmButton ?? true,
              showCancelButton: modal.showCancelButton ?? true,
              showCancelIcon: modal.showCancelIcon ?? false,
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
      className={`notify-overlay ${modal.open ? "open" : ""}`}
      onClick={handleClose}
      style={modal.style?.overlay ?? {}}
    >
      <div
        className={`notify-container notify-${modal.size} ${modal.animation} ${
          modal.themeMode == "dark" ? "notify-theme-dark" : ""
        }`}
        style={modal.style?.modal ?? {}}
        onClick={(e) => e.stopPropagation()}
      >
        {renderModalVariant()}
      </div>
    </div>
  );
};

export default Modal;
