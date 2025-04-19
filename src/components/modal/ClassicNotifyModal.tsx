import { NotifyModalProps } from "../../types/notify.types";
import ModalButtonContainer from "../common/ModalButtonContainer";
import ModalIcon from "../common/ModalIcon";

const ClassicNotifyModal = ({ modal }: { modal: NotifyModalProps }) => {
  const { title, message, showCancelIcon, cancelIcon, style, reject } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div
        className={"notify-classic-modal-header"}
        style={style?.modalHeader ?? {}}
      >
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
            {cancelIcon}
          </div>
        )}
      </div>

      {/* ================== Icon Section ================== */}
      <ModalIcon modal={modal} />

      {/* ================== Message Section ================== */}
      <p
        className={"notify-classic-modal-message"}
        style={style?.message ?? {}}
      >
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ModalButtonContainer modal={modal} />
    </>
  );
};

export default ClassicNotifyModal;
