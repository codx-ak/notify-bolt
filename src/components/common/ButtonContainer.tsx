import { NotifyProps } from "../../types/notify.types";

const ButtonContainer = ({ modal }: { modal: NotifyProps }) => {
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
          style={modal.style?.button ?? {}}
        >
          {modal.cancelButtonText}
        </button>
      )}
      {modal.showDenyButton && (
        <button
          className="notify-button notify-deny"
          onClick={() => modal.resolve?.("deny")}
          style={modal.style?.button ?? {}}
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
          style={modal.style?.button ?? {}}
        >
          {modal.confirmButtonText}
        </button>
      )}
    </div>
  );
};

export default ButtonContainer;
