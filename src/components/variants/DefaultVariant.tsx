import { NotifyProps } from '../../core/notify.types';
import CancelIconContainer from '../common/CloseIcon';
import ButtonContainer from '../common/ButtonContainer';
import IconContainer from '../common/IconContainer';

const DefaultVariant = ({ modal }: { modal: NotifyProps }) => {
  const { title, message, showCloseIcon, style } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div className="notify-default-header" style={style?.modalHeader}>
        {showCloseIcon && <CancelIconContainer modal={modal} />}
      </div>

      {/* ================== Icon Section ================== */}
      <IconContainer modal={modal} />

      {/* ================== Title Section ================== */}
      <h2 className="notify-default-title" style={style?.title} data-testid="notify-title">
        {title}
      </h2>

      {/* ================== Message Section ================== */}
      <p className="notify-default-message" style={style?.message} data-testid="notify-message">
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ButtonContainer modal={modal} />
    </>
  );
};

export default DefaultVariant;
