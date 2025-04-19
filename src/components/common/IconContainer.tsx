import React from "react";
import {
  NotifyProps,
  NotifyVariantTypes,
  NotifyStatusTypes,
} from "../../types/notify.types";
import {
  ClassicSuccessIcon,
  ClassicDefaultIcon,
  ClassicErrorIcon,
  ClassicInfoIcon,
  ClassicWarningIcon,
} from "../../assets/ClassicIcons";

// Utility function to get colors based on status or icon
const getIconColors = (status: NotifyStatusTypes) => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    success: {
      backgroundColor: "#D1FADF",
      color: "#12B76A",
    },
    error: {
      backgroundColor: "#FEE4E2",
      color: "#F04438",
    },
    info: {
      backgroundColor: "#E0F2FE",
      color: "#0EA5E9",
    },
    warning: {
      backgroundColor: "#FEF3C7",
      color: "#F59E0B",
    },
    default: {
      backgroundColor: "#E0E7FF",
      color: "#6366F1",
    },
  };

  return colorMap[status] || colorMap.default;
};

// Utility: get default icon based on status
const getClassicDefaultIcon = (
  icon: NotifyStatusTypes,
  status: NotifyStatusTypes
) => {
  const { backgroundColor, color } = getIconColors(status);

  switch (icon) {
    case "success":
      return <ClassicSuccessIcon background={backgroundColor} color={color} />;
    case "error":
      return <ClassicErrorIcon background={backgroundColor} color={color} />;
    case "info":
      return <ClassicInfoIcon background={backgroundColor} color={color} />;
    case "warning":
      return <ClassicWarningIcon background={backgroundColor} color={color} />;
    case "default":
      return <ClassicDefaultIcon background={backgroundColor} color={color} />;
    default:
      return <ClassicDefaultIcon background={backgroundColor} color={color} />;
  }
};

const getIcon = (
  variant: NotifyVariantTypes,
  icon: NotifyStatusTypes,
  status: NotifyStatusTypes
) => {
  switch (variant) {
    case "classic":
      return getClassicDefaultIcon(icon, status);
    case "default":
      return getClassicDefaultIcon(icon, status);

    default:
      return getClassicDefaultIcon(icon, status);
  }
};

// Utility: get container className based on variant
const getVariantClassNames = (variant: NotifyVariantTypes) => {
  switch (variant) {
    case "classic":
      return "notify-classic-icon-container";
    case "minimal":
      return "notify-minimal-icon-container";
    case "default":
      return "notify-default-icon-container";
    default:
      return "notify-default-icon-container";
  }
};

// Utility: Check if icon is a valid status string
const isStatusType = (icon: unknown): icon is NotifyStatusTypes =>
  ["success", "error", "info", "warning", "default"].includes(
    icon as NotifyStatusTypes
  );

const IconContainer = ({ modal }: { modal: NotifyProps }) => {
  const { variant = "default", icon, style, status } = modal;

  const containerStyle = getVariantClassNames(variant);

  // Case 1: Icon is a known status string (used as fallback)
  if (isStatusType(icon)) {
    const fallbackIcon = getIcon(variant, icon, status);
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
  const fallback = getIcon(variant, "default", status);
  return (
    <div className={containerStyle} style={{ ...style?.icon }}>
      {fallback}
    </div>
  );
};

export default IconContainer;
