import { NotifyProps } from "../../types/notify.types";

const ButtonContainer = ({ modal }: { modal: NotifyProps }) => {
  return (
    <div
      className={"notify-button-container"}
      style={modal.style?.buttonContainer ?? {}}
    >
      {modal.showCancelButton && (
        <button
          className={`notify-button notify-cancel`}
          onClick={() => modal.reject?.("dismiss")}
          style={modal.style?.button ?? {}}
        >
          {modal.cancelButtonText}
        </button>
      )}
      {modal.showConfirmButton && (
        <button
          className={`notify-button notify-confirm-${modal.status}`}
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
