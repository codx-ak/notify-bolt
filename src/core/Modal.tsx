import { NotifyProps } from "../types/notify.types";
import ClassicVariant from "../components/variants/ClassicVariant";
import DefaultVariant from "../components/variants/DefaultVariant";
import MinimalVariant from "../components/variants/MinimalVariant";
import { useEffect, useRef } from "react";

const Modal = ({ modal }: { modal: NotifyProps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [modal.open]);

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
              showCloseIcon: modal.showCloseIcon ?? true,
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
              showCloseIcon: modal.showCloseIcon ?? false,
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
              showCloseIcon: modal.showCloseIcon ?? false,
            }}
          />
        );
    }
  };

  // Handles the modal dismiss logic when clicking close
  const handleClose = () => (modal.allowOutsideClick ? modal.reject?.() : null);
  return (
    <div
      ref={containerRef}
      tabIndex={-1}
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
        {modal.timerProgressBar && (modal.timer ?? 0) > 0 && (
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
