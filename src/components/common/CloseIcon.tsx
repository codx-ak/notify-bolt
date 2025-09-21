import React from 'react';
import { NotifyProps } from '../../core/notify.types';
import IconClose from '../../assets/CloseIcon';

const CloseIcon = ({ modal }: { modal: NotifyProps }) => {
  const handleClose = () => modal.reject?.();

  // Case 1: Icon is a string
  if (typeof modal.closeIcon === 'string') {
    const isURL = modal.closeIcon.startsWith('http://') || modal.closeIcon.startsWith('https://');

    return isURL ? (
      <img
        src={modal.closeIcon}
        alt="close"
        className="notify-cancel-icon"
        onClick={handleClose}
        role="button"
        tabIndex={0}
      />
    ) : (
      <div
        className="notify-cancel-icon"
        onClick={handleClose}
        role="button"
        tabIndex={0}
        aria-label="Close"
      >
        {modal.closeIcon}
      </div>
    );
  }

  // Case 2: Icon is a React element
  if (React.isValidElement(modal.closeIcon)) {
    return (
      <div
        className="notify-cancel-icon"
        onClick={handleClose}
        role="button"
        tabIndex={0}
        aria-label="Close"
      >
        {modal.closeIcon}
      </div>
    );
  }

  // Case 3: Fallback (default "×")
  return (
    <div
      className="notify-cancel-icon"
      onClick={handleClose}
      role="button"
      tabIndex={0}
      aria-label="Close"
    >
      <IconClose />
    </div>
  );
};

export default CloseIcon;
