import { NotifyProps } from '../../core/notify.types';
import CancelIconContainer from '../common/CloseIcon';
import ButtonContainer from '../common/ButtonContainer';
import IconContainer from '../common/IconContainer';

const ClassicVariant = ({ modal }: { modal: NotifyProps }) => {
  const { title, message, showCloseIcon, style } = modal;

  return (
    <>
      {/* ================== Header Section ================== */}
      <div className="notify-classic-header" style={style?.modalHeader}>
        {/* Modal Title */}
        <h2 className="notify-classic-title" style={style?.title} data-testid="notify-title">
          {title}
        </h2>

        {/* Close Icon */}
        {showCloseIcon && <CancelIconContainer modal={modal} />}
      </div>

      {/* ================== Icon Section ================== */}
      <IconContainer modal={modal} />

      {/* ================== Message Section ================== */}
      <p className="notify-classic-message" style={style?.message} data-testid="notify-message">
        {message}
      </p>

      {/* ================== Action Buttons ================== */}
      <ButtonContainer modal={modal} />
    </>
  );
};

export default ClassicVariant;
