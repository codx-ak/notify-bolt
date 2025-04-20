import { NotifyProps } from "../../types/notify.types";
import CancelIconContainer from "../common/CancelIconContainer";
import ButtonContainer from "../common/ButtonContainer";
import IconContainer from "../common/IconContainer";

const DefaultVariant = ({ modal }: { modal: NotifyProps }) => {
  const { title, message, showCloseIcon, style } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div className={"notify-default-header"} style={style?.modalHeader ?? {}}>
        {/* Close Icon */}
        {showCloseIcon && <CancelIconContainer modal={modal} />}
      </div>

      {/* ================== Icon Section ================== */}
      <IconContainer modal={modal} />

      {/* Modal Title */}
      <div className={"notify-default-title"} style={style?.title ?? {}}>
        {title}
      </div>
      {/* ================== Message Section ================== */}
      <p className={"notify-default-message"} style={style?.message ?? {}}>
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ButtonContainer modal={modal} />
    </>
  );
};

export default DefaultVariant;
