import { NotifyProps } from "../../types/notify.types";
import CancelIconContainer from "../common/CancelIconContainer";
import ButtonContainer from "../common/ButtonContainer";
import IconContainer from "../common/IconContainer";

const MinimalVariant = ({ modal }: { modal: NotifyProps }) => {
  const { title, message, showCancelIcon, style } = modal;

  return (
    <>
      <div className="notify-minimal-container">
        {/* ================== Icon Section ================== */}
        <IconContainer modal={modal} />

        <div className="notify-minimal-body">
          {/* ================== Header Section ================== */}
          <div
            className={"notify-minimal-header"}
            style={style?.modalHeader ?? {}}
          >
            {/* Close Icon */}
            {showCancelIcon && <CancelIconContainer modal={modal} />}
          </div>

          <div>
            {/* Modal Title */}
            <div className={"notify-minimal-title"} style={style?.title ?? {}}>
              {title}
            </div>
            {/* ================== Message Section ================== */}
            <p
              className={"notify-minimal-message"}
              style={style?.message ?? {}}
            >
              {message}
            </p>
          </div>

          {/* ================== Action Buttons ================== */}
          <ButtonContainer modal={modal} />
        </div>
      </div>
    </>
  );
};

export default MinimalVariant;
