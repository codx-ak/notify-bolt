import React from "react";
import { NotifyProps } from "../../types/notify.types";
import {
  getIconComponent,
  getVariantClassNames,
  isStatusType,
} from "../../utils/Icons.utils";
import { getNotifyDefaults } from "../../core/notifyGlobals";

const IconContainer = ({ modal }: { modal: NotifyProps }) => {
  const {
    variant = "default",
    icon,
    style,
    status,
    iconType = "classic",
  } = modal;

  const containerStyle = getVariantClassNames(variant);

  const notifyDefault = getNotifyDefaults();
  const notifyIcon = icon ?? notifyDefault?.icons?.[status];

  // Case 1: If icon is a known status string
  if (isStatusType(notifyIcon)) {
    const iconComponent = getIconComponent(iconType, notifyIcon, status);
    return (
      <div className={containerStyle} style={{ ...style?.icon }}>
        {iconComponent}
      </div>
    );
  }

  // 2. If icon is a string: check if it's an image URL
  if (typeof notifyIcon === "string") {
    const isURL =
      notifyIcon.startsWith("http://") || notifyIcon.startsWith("https://");
    return (
      <div className={containerStyle}>
        {isURL ? (
          <img
            src={notifyIcon}
            alt="modal-icon"
            style={{
              width: "100%",
              height: 100,
              objectFit: "contain",
              ...style?.icon,
            }}
          />
        ) : (
          <span style={{ fontSize: 40, ...style?.icon }}>{notifyIcon}</span>
        )}
      </div>
    );
  }

  // Case 3: If icon is JSX/ReactNode (custom component)
  if (React.isValidElement(notifyIcon)) {
    return (
      <div
        className={containerStyle}
        style={{ overflow: "hidden", ...style?.icon }}
      >
        {notifyIcon}
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
