import React from 'react';
import { NotifyProps } from '../../core/notify.types';
import { getIconComponent, getVariantClassNames, isStatusType } from '../../utils/Icons.utils';
import { getNotifyDefaults } from '../../core/SetNotifyDefaults';

const IconContainer = ({ modal }: { modal: NotifyProps }) => {
  const { variant = 'default', icon, style, status, iconType = 'classic' } = modal;

  const containerClass = getVariantClassNames(variant);
  const notifyDefaults = getNotifyDefaults();

  // Determine final icon (user > defaults > fallback)
  const notifyIcon = icon ?? notifyDefaults?.icons?.[status];
  const iconStyle: React.CSSProperties = { ...style?.icon };

  // Case 1: Known status type (maps to built-in SVG)
  if (isStatusType(notifyIcon)) {
    return (
      <div className={containerClass} style={iconStyle}>
        {getIconComponent(iconType, status)}
      </div>
    );
  }

  // Case 2: Icon is a string → check if it's an image URL
  if (typeof notifyIcon === 'string') {
    const isURL = notifyIcon.startsWith('http');
    return (
      <div className={containerClass}>
        {isURL ? (
          <img
            src={notifyIcon}
            alt="notify-icon"
            style={{
              width: '100%',
              height: 100,
              objectFit: 'contain',
              ...iconStyle,
            }}
          />
        ) : (
          <span style={{ fontSize: 40, ...iconStyle }}>{notifyIcon}</span>
        )}
      </div>
    );
  }

  // Case 3: Custom React element
  if (React.isValidElement(notifyIcon)) {
    return (
      <div className={containerClass} style={{ overflow: 'hidden', ...iconStyle }}>
        {notifyIcon}
      </div>
    );
  }

  // Case 4: Fallback → default status icon
  return (
    <div className={containerClass} style={iconStyle}>
      {getIconComponent(iconType, status)}
    </div>
  );
};

export default IconContainer;
