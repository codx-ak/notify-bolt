import { NotifyProps } from "../types/notify.types";
import ClassicVariant from "../components/variants/ClassicVariant";
import DefaultVariant from "../components/variants/DefaultVariant";
import MinimalVariant from "../components/variants/MinimalVariant";
import { useEffect } from "react";

const Modal = ({ modal }: { modal: NotifyProps }) => {
  useEffect(() => {
    if (modal.onDidOpen) modal.onDidOpen();

    return () => {
      if (modal.onWillClose) modal.onWillClose();
    };
  }, []);

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
  const handleClose = () => (modal.allowOutsideClick ? modal.reject?.() : null);
  return (
    <div
      className={`notify-overlay ${modal.open ? "open" : ""}`}
      onClick={handleClose}
      style={modal.style?.overlay ?? {}}
    >
      <div
        className={`notify-container notify-${modal.size} ${modal.animation} ${
          modal.themeMode == "dark" ? "notify-theme-dark" : ""
        } ${modal.variant == "minimal" ? `notify-border-${modal.status}` : ""}`}
        style={modal.style?.modal ?? {}}
        onClick={(e) => e.stopPropagation()}
      >
        {renderModalVariant()}
        {modal.timerProgressBar && modal.timer && (
          <div
            className="notify-progress-bar"
            style={{ animationDuration: `${modal.timer}ms` }}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
