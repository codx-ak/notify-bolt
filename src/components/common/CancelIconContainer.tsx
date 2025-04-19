import React from "react";
import { NotifyProps } from "../../types/notify.types";

const CancelIconContainer = ({ modal }: { modal: NotifyProps }) => {
  const handleClose = () => modal.reject?.("dismiss");

  // 2. If icon is a string: check if it's an image URL
  if (typeof modal.cancelIcon === "string") {
    const isURL =
      modal.cancelIcon.startsWith("http://") ||
      modal.cancelIcon.startsWith("https://");
    return (
      <>
        {isURL ? (
          <img
            src={modal.cancelIcon}
            alt="modal-icon"
            className={"notify-cancel-icon"}
          />
        ) : (
          <div
            className={"notify-cancel-icon"}
            onClick={handleClose}
            aria-label="Close"
          >
            {modal.cancelIcon}
          </div>
        )}
      </>
    );
  }

  // Case 3: Icon is JSX/ReactNode (custom component)
  if (React.isValidElement(modal.cancelIcon)) {
    return (
      <div
        className={"notify-cancel-icon"}
        onClick={handleClose}
        aria-label="Close"
      >
        {modal.cancelIcon}
      </div>
    );
  }
};
export default CancelIconContainer;
