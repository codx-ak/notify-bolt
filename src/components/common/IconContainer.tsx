import React from "react";
import { NotifyProps } from "../../types/notify.types";
import {
  getIconComponent,
  getVariantClassNames,
  isStatusType,
} from "../../utils/Icons.utils";

const IconContainer = ({ modal }: { modal: NotifyProps }) => {
  const {
    variant = "default",
    icon,
    style,
    status,
    iconType = "classic",
  } = modal;

  const containerStyle = getVariantClassNames(variant);

  // Case 1: If icon is a known status string
  if (isStatusType(icon)) {
    const iconComponent = getIconComponent(iconType, icon, status);
    return (
      <div className={containerStyle} style={{ ...style?.icon }}>
        {iconComponent}
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

  // Case 3: If icon is JSX/ReactNode (custom component)
  if (React.isValidElement(icon)) {
    return (
      <div className={containerStyle} style={{ ...style?.icon }}>
        {icon}
      </div>
    );
  }

  // Case 4: No valid icon provided – fallback to default status icon
  const fallbackIcon = getIconComponent(iconType, "default", status);
  return (
    <div className={containerStyle} style={{ ...style?.icon }}>
      {fallbackIcon}
    </div>
  );
};

export default IconContainer;
