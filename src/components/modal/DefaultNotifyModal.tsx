import { NotifyModalProps } from "../../types/notify.types";
import ModalButtonContainer from "../common/ModalButtonContainer";
import ModalIcon from "../common/ModalIcon";

const DefaultNotifyModal = ({ modal }: { modal: NotifyModalProps }) => {
  const { title, message, showCancelIcon, cancelIcon, style, reject } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div
        className={"notify-default-modal-header"}
        style={style?.modalHeader ?? {}}
      >
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

      {/* Modal Title */}
      <div className={"notify-default-modal-title"} style={style?.title ?? {}}>
        {title}
      </div>
      {/* ================== Message Section ================== */}
      <p
        className={"notify-default-modal-message"}
        style={style?.message ?? {}}
      >
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ModalButtonContainer modal={modal} />
    </>
  );
};

export default DefaultNotifyModal;
