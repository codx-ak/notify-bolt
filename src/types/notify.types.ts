import React from "react";

/**
 * Theme mode options for the modal.
 */
type NotifyThemeModeTypes = "light" | "dark";

/**
 * Visual variants for the modal layout.
 * Future expansion can add more variants beyond 'classic'.
 */
export type NotifyVariantTypes = "classic" | "default" | "minimal";

// icons types
type NotifyIconTypes = "classic";

// animations for modal
type NotifyAnimationTypes =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

/**
 * Modal size options.
 */
type NotifySizeTypes = "xs" | "sm" | "md" | "lg";

/**
 * Types of alert statuses.
 */
export type NotifyStatusTypes =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "default";

/**
 * Custom styles for different modal parts.
 */
interface NotifyStyleTypes {
  title?: React.CSSProperties | null;
  message?: React.CSSProperties | null;
  icon?: React.CSSProperties | null;
  modal?: React.CSSProperties | null;
  overlay?: React.CSSProperties | null;
  button?: React.CSSProperties | null;
  buttonContainer?: React.CSSProperties | null;
  modalHeader?: React.CSSProperties | null;
}

/**
 * Global configuration options shared across all notify-bolt modals.
 */
export interface NotifyGlobalConfigProps {
  themeMode?: NotifyThemeModeTypes;
  allowOutsideClick?: boolean;
  defaultSize?: NotifySizeTypes;
  showCancelIcon?: boolean;
  cancelIcon?: React.ReactNode | string;
  style?: NotifyStyleTypes;
}

/**
 * Props for a single Notify modal alert.
 */
export interface NotifyProps extends NotifyGlobalConfigProps {
  open: boolean;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  size?: NotifySizeTypes;
  status: NotifyStatusTypes;
  icon?: NotifyStatusTypes | string | React.ReactNode;
  showConfirmButton?: boolean;
  confirmButtonText?: string | React.ReactNode;
  iconType?: NotifyIconTypes;
  animation?: NotifyAnimationTypes;
  showCancelButton?: boolean;
  cancelButtonText?: string | React.ReactNode;
  variant?: NotifyVariantTypes;
  resolve: ((value: string) => void) | null;
  reject: ((reason: string) => void) | null;
}
