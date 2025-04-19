import { NotifyProps } from "../../types/notify.types";
import CancelIconContainer from "../common/CancelIconContainer";
import ButtonContainer from "../common/ButtonContainer";
import IconContainer from "../common/IconContainer";

const ClassicVariant = ({ modal }: { modal: NotifyProps }) => {
  const { title, message, showCancelIcon, style } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div className={"notify-classic-header"} style={style?.modalHeader ?? {}}>
        {/* Modal Title */}
        <div className={"notify-classic-title"} style={style?.title ?? {}}>
          {title}
        </div>

        {/* Close Icon */}
        {showCancelIcon && <CancelIconContainer modal={modal} />}
      </div>

      {/* ================== Icon Section ================== */}
      <IconContainer modal={modal} />

      {/* ================== Message Section ================== */}
      <p className={"notify-classic-message"} style={style?.message ?? {}}>
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ButtonContainer modal={modal} />
    </>
  );
};

export default ClassicVariant;
