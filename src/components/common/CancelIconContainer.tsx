import React from "react";
import { NotifyProps } from "../../types/notify.types";

const CancelIconContainer = ({ modal }: { modal: NotifyProps }) => {
  const handleClose = () => modal.reject?.();

  // 2. If icon is a string: check if it's an image URL
  if (typeof modal.closeIcon === "string") {
    const isURL =
      modal.closeIcon.startsWith("http://") ||
      modal.closeIcon.startsWith("https://");
    return (
      <>
        {isURL ? (
          <img
            src={modal.closeIcon}
            alt="modal-icon"
            className={"notify-cancel-icon"}
          />
        ) : (
          <div
            className={"notify-cancel-icon"}
            onClick={handleClose}
            aria-label="Close"
          >
            {modal.closeIcon}
          </div>
        )}
      </>
    );
  }

  // Case 3: Icon is JSX/ReactNode (custom component)
  if (React.isValidElement(modal.closeIcon)) {
    return (
      <div
        className={"notify-cancel-icon"}
        onClick={handleClose}
        aria-label="Close"
      >
        {modal.closeIcon}
      </div>
    );
  }
};
export default CancelIconContainer;
