import {
  ClassicDefaultIcon,
  ClassicErrorIcon,
  ClassicInfoIcon,
  ClassicSuccessIcon,
  ClassicWarningIcon,
} from "../assets/ClassicIcons";
import {
  OutlineDefaultIcon,
  OutlineErrorIcon,
  OutlineInfoIcon,
  OutlineSuccessIcon,
  OutlineWarningIcon,
} from "../assets/OutlineIcons";
import {
  NotifyIconTypes,
  NotifyStatusTypes,
  NotifyVariantTypes,
} from "../types/notify.types";

// Utility function to get colors based on status or icon
export const getIconColors = (
  status: NotifyStatusTypes,
  variant: NotifyIconTypes
) => {
  // Color mappings for classic icons
  const colorMap: Record<
    NotifyStatusTypes,
    { backgroundColor: string; color: string }
  > = {
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

  // Color mappings for outline icons (no background)
  const outlineColorMap: Record<
    NotifyStatusTypes,
    { backgroundColor: string; color: string }
  > = {
    success: {
      backgroundColor: "transparent",
      color: "#a5dc86",
    },
    error: {
      backgroundColor: "transparent",
      color: "#f27474",
    },
    info: {
      backgroundColor: "transparent",
      color: "#3fc3ee",
    },
    warning: {
      backgroundColor: "transparent",
      color: "#facea8",
    },
    default: {
      backgroundColor: "transparent",
      color: "#b57edc",
    },
  };

  // Return appropriate color scheme for the icon variant
  if (variant === "outline") {
    return outlineColorMap[status] || outlineColorMap.default;
  } else {
    return colorMap[status] || colorMap.default;
  }
};

// Utility: Get icon component based on variant and status
export const getIconComponent = (
  variant: NotifyIconTypes,
  icon: NotifyStatusTypes,
  status: NotifyStatusTypes
) => {
  const { backgroundColor, color } = getIconColors(status, variant);

  const iconsMap = {
    classic: {
      success: (
        <ClassicSuccessIcon background={backgroundColor} color={color} />
      ),
      error: <ClassicErrorIcon background={backgroundColor} color={color} />,
      info: <ClassicInfoIcon background={backgroundColor} color={color} />,
      warning: (
        <ClassicWarningIcon background={backgroundColor} color={color} />
      ),
      default: (
        <ClassicDefaultIcon background={backgroundColor} color={color} />
      ),
    },
    outline: {
      success: <OutlineSuccessIcon color={color} />,
      error: <OutlineErrorIcon color={color} />,
      info: <OutlineInfoIcon color={color} />,
      warning: <OutlineWarningIcon color={color} />,
      default: <OutlineDefaultIcon color={color} />,
    },
  };

  // Return the appropriate icon based on the variant and status
  return iconsMap[variant]?.[icon] || iconsMap[variant]?.default;
};

// Utility: Get container className based on variant
export const getVariantClassNames = (variant: NotifyVariantTypes) => {
  const variantClasses = {
    classic: "notify-classic-icon-container",
    minimal: "notify-minimal-icon-container",
    default: "notify-default-icon-container",
  };

  return variantClasses[variant] || variantClasses.default;
};

// Utility: Check if icon is a valid status string
export const isStatusType = (icon: unknown): icon is NotifyStatusTypes =>
  ["success", "error", "info", "warning", "default"].includes(
    icon as NotifyStatusTypes
  );
