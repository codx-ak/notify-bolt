import React from 'react';
import {
  ClassicDefaultIcon,
  ClassicErrorIcon,
  ClassicInfoIcon,
  ClassicSuccessIcon,
  ClassicWarningIcon,
} from '../assets/ClassicIcons';
import {
  OutlineDefaultIcon,
  OutlineErrorIcon,
  OutlineInfoIcon,
  OutlineSuccessIcon,
  OutlineWarningIcon,
} from '../assets/OutlineIcons';
import { NotifyIconTypes, NotifyStatusTypes, NotifyVariantTypes } from '../core/notify.types';

// ================== Color Mappings ==================
const colorMap: Record<NotifyStatusTypes, { backgroundColor: string; color: string }> = {
  success: { backgroundColor: '#D1FADF', color: '#12B76A' },
  error: { backgroundColor: '#FEE4E2', color: '#F04438' },
  info: { backgroundColor: '#E0F2FE', color: '#0EA5E9' },
  warning: { backgroundColor: '#FEF3C7', color: '#F59E0B' },
  default: { backgroundColor: '#E0E7FF', color: '#6366F1' },
};

const outlineColorMap: Record<NotifyStatusTypes, { backgroundColor: string; color: string }> = {
  success: { backgroundColor: 'transparent', color: '#a5dc86' },
  error: { backgroundColor: 'transparent', color: '#f27474' },
  info: { backgroundColor: 'transparent', color: '#3fc3ee' },
  warning: { backgroundColor: 'transparent', color: '#facea8' },
  default: { backgroundColor: 'transparent', color: '#b57edc' },
};

// ================== Color Getter ==================
export const getIconColors = (status: NotifyStatusTypes, variant: NotifyIconTypes) =>
  variant === 'outline' ? outlineColorMap[status] : colorMap[status];

// ================== Icon Getter ==================
export const getIconComponent = (
  variant: NotifyIconTypes,
  status: NotifyStatusTypes // <-- status is enough here
) => {
  const { backgroundColor, color } = getIconColors(status, variant);

  const iconsMap = {
    classic: {
      success: <ClassicSuccessIcon background={backgroundColor} color={color} />,
      error: <ClassicErrorIcon background={backgroundColor} color={color} />,
      info: <ClassicInfoIcon background={backgroundColor} color={color} />,
      warning: <ClassicWarningIcon background={backgroundColor} color={color} />,
      default: <ClassicDefaultIcon background={backgroundColor} color={color} />,
    },
    outline: {
      success: <OutlineSuccessIcon color={color} />,
      error: <OutlineErrorIcon color={color} />,
      info: <OutlineInfoIcon color={color} />,
      warning: <OutlineWarningIcon color={color} />,
      default: <OutlineDefaultIcon color={color} />,
    },
  };

  return iconsMap[variant][status] ?? iconsMap[variant].default;
};

// ================== Variant Class Names ==================
export const getVariantClassNames = (variant: NotifyVariantTypes) => {
  const variantClasses: Record<NotifyVariantTypes, string> = {
    classic: 'notify-classic-icon-container',
    default: 'notify-default-icon-container',
  };

  return variantClasses[variant] ?? variantClasses.default;
};

// ================== Type Guard ==================
export const isStatusType = (icon: unknown): icon is NotifyStatusTypes =>
  (['success', 'error', 'info', 'warning', 'default'] as NotifyStatusTypes[]).includes(
    icon as NotifyStatusTypes
  );
