import { NotifyProps } from "../../types/notify.types";

const ButtonContainer = ({ modal }: { modal: NotifyProps }) => {
  const buttonStyles = {
    fontFamily:
      modal.style?.modal?.fontFamily ||
      modal.style?.button?.fontFamily ||
      '"Poppins", sans-serif',
    ...modal.style?.button,
  };
  return (
    <div
      className={"notify-button-container"}
      style={modal.style?.buttonContainer ?? {}}
    >
      {modal.showCancelButton && (
        <button
          className={`notify-button notify-button-${
            modal.focusConfirm ? "cancel" : `${modal.status}`
          }`}
          onClick={() => modal.reject?.()}
          style={buttonStyles}
        >
          {modal.cancelButtonText}
        </button>
      )}
      {modal.showDenyButton && (
        <button
          className="notify-button notify-deny"
          onClick={() => modal.resolve?.("deny")}
          style={buttonStyles}
        >
          {modal.denyButtonText}
        </button>
      )}

      {modal.showConfirmButton && (
        <button
          className={`notify-button notify-button-${
            modal.focusConfirm ? `${modal.status}` : "cancel"
          }`}
          onClick={() => modal.resolve?.("confirm")}
          style={buttonStyles}
        >
          {modal.confirmButtonText}
        </button>
      )}
    </div>
  );
};

export default ButtonContainer;
