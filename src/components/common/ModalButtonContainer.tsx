import { NotifyModalProps } from "../../types/notify.types";

const ModalButtonContainer = ({ modal }: { modal: NotifyModalProps }) => {
  return (
    <div
      className={"notify-modal-button-container"}
      style={modal.style?.buttonContainer ?? {}}
    >
      {modal.showCancelButton && (
        <button
          className={`notify-modal-button notify-modal-cancel`}
          onClick={() => modal.reject?.("dismiss")}
          style={modal.style?.button ?? {}}
        >
          {modal.cancelButtonText}
        </button>
      )}
      {modal.showConfirmButton && (
        <button
          className={`notify-modal-button notify-modal-confirm-${modal.status}`}
          onClick={() => modal.resolve?.("confirm")}
          style={modal.style?.button ?? {}}
        >
          {modal.confirmButtonText}
        </button>
      )}
    </div>
  );
};

export default ModalButtonContainer;
