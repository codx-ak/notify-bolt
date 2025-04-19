import React from "react";
import {
  NotifyModalProps,
  NotifyModalVariant,
  NotifyStatusType,
} from "../../types/notify.types";
import {
  ClassicSuccessIcon,
  ClassicDefaultIcon,
  ClassicErrorIcon,
  ClassicInfoIcon,
  ClassicWarningIcon,
} from "../../assets/ClassicIcons";

// Utility: get default icon based on status
const getClassicDefaultIcon = (status: NotifyStatusType) => {
  switch (status) {
    case "success":
      return <ClassicSuccessIcon />;
    case "error":
      return <ClassicErrorIcon />;
    case "info":
      return <ClassicInfoIcon />;
    case "warning":
      return <ClassicWarningIcon />;
    default:
      return <ClassicDefaultIcon />;
  }
};

const getIcon = (variant: NotifyModalVariant, status: NotifyStatusType) => {
  switch (variant) {
    case "classic":
      return getClassicDefaultIcon(status);
    case "default":
      return getClassicDefaultIcon(status);

    default:
      return getClassicDefaultIcon(status);
  }
};

// Utility: get container className based on variant
const getVariantClassNames = (variant: NotifyModalVariant) => {
  switch (variant) {
    case "classic":
      return "notify-classic-modal-icon-container";
    case "default":
      return "notify-default-modal-icon-container";
    default:
      return "notify-default-modal-icon-container";
  }
};

// Utility: Check if icon is a valid status string
const isStatusType = (icon: unknown): icon is NotifyStatusType =>
  ["success", "error", "info", "warning", "default"].includes(
    icon as NotifyStatusType
  );

const ModalIcon = ({ modal }: { modal: NotifyModalProps }) => {
  const { variant = "default", icon, style, status } = modal;

  const containerStyle = getVariantClassNames(variant);

  // Case 1: Icon is a known status string (used as fallback)
  if (isStatusType(icon)) {
    const fallbackIcon = getIcon(variant, icon);
    return (
      <div className={containerStyle} style={{ ...style?.icon }}>
        {fallbackIcon}
      </div>
    );
  }

  // 2. If icon is a string: check if it's an image URL
  if (typeof icon === "string") {
    const isURL = icon.startsWith("http://") || icon.startsWith("https://");
    return (
      <div className={containerStyle}>
        {isURL ? (
          <img
            src={icon}
            alt="modal-icon"
            style={{
              width: "100%",
              height: 100,
              objectFit: "contain",
              ...style?.icon,
            }}
          />
        ) : (
          <span style={{ fontSize: 40, ...style?.icon }}>{icon}</span>
        )}
      </div>
    );
  }

  // Case 3: Icon is JSX/ReactNode (custom component)
  if (React.isValidElement(icon)) {
    return (
      <div className={containerStyle} style={{ ...style?.icon }}>
        {icon}
      </div>
    );
  }

  // Case 4: No valid icon provided – fallback to default status icon
  const fallback = getIcon(variant, status);
  return (
    <div className={containerStyle} style={{ ...style?.icon }}>
      {fallback}
    </div>
  );
};

export default ModalIcon;
