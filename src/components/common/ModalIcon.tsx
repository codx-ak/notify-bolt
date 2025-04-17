import React from "react";
import { NotifyModalVariant, NotifyStatusType } from "../../types/notify.types";
import { SuccessIcon } from "../../assets/SuccessIcon";
import { ErrorIcon } from "../../assets/ErrorIcon";
import { InfoIcon } from "../../assets/InfoIcon";
import { WarningIcon } from "../../assets/WarningIcon";
import { DefaultIcon } from "../../assets/DefaultIcon";

const getDefaultIcon = (status: NotifyStatusType) => {
  switch (status) {
    case "success":
      return <SuccessIcon />;
    case "error":
      return <ErrorIcon />;
    case "info":
      return <InfoIcon />;
    case "warning":
      return <WarningIcon />;
    default:
      return <DefaultIcon />;
  }
};

// Props interface for ModalIcon component
interface ModalIconProps {
  icon?: React.ReactNode | string | null;
  status: NotifyStatusType;
  style?: React.CSSProperties;
  variant?: NotifyModalVariant;
}

const ModalIcon: React.FC<ModalIconProps> = ({
  icon,
  status,
  style,
  variant,
}) => {
  // Container style using Flexbox to center the icon horizontally and vertically
  const containerStyle =
    variant == "classic" ? "notify-classic-modal-icon-container" : "";

  // Case 1: No icon provided – use default icon based on modal status
  if (!icon) {
    const defaultIcon = getDefaultIcon(status); // Get default icon (string path or JSX)

    return (
      <div className={containerStyle} style={{ ...style }}>
        {defaultIcon}
      </div>
    );
  }

  // Case 2: Icon is a string – treat it as an image or SVG URL
  if (typeof icon === "string") {
    return (
      <div className={containerStyle}>
        <img
          src={icon}
          alt="icon"
          style={{
            width: "100%",
            height: 100,
            objectFit: "contain",
            ...style,
          }}
        />
      </div>
    );
  }

  // Case 3: Icon is JSX – render it directly inside the centered container
  return (
    <div className={containerStyle} style={{ ...style }}>
      {icon}
    </div>
  );
};

export default ModalIcon;
