import { NotifyProps } from '../../core/notify.types';

const ButtonContainer = ({ modal }: { modal: NotifyProps }) => {
  const buttonStyles: React.CSSProperties = {
    fontFamily:
      modal.style?.button?.fontFamily || modal.style?.modal?.fontFamily || '"Poppins", sans-serif',
    ...modal.style?.button,
  };

  const renderCancelButton = () =>
    modal.showCancelButton && (
      <button
        type="button"
        className={`notify-button notify-button-${modal.focusConfirm ? 'cancel' : modal.status}`}
        onClick={() => modal.reject?.()}
        style={buttonStyles}
      >
        {modal.cancelButtonText}
      </button>
    );

  const renderDenyButton = () =>
    modal.showDenyButton && (
      <button
        type="button"
        className="notify-button notify-deny"
        onClick={() => modal.resolve?.('deny')}
        style={buttonStyles}
      >
        {modal.denyButtonText}
      </button>
    );

  const renderConfirmButton = () =>
    modal.showConfirmButton && (
      <button
        type="button"
        className={`notify-button notify-button-${modal.focusConfirm ? modal.status : 'cancel'}`}
        onClick={() => modal.resolve?.('confirm')}
        style={buttonStyles}
      >
        {modal.confirmButtonText}
      </button>
    );

  return (
    <div className="notify-button-container" style={modal.style?.buttonContainer || {}}>
      {renderCancelButton()}
      {renderDenyButton()}
      {renderConfirmButton()}
    </div>
  );
};

export default ButtonContainer;
