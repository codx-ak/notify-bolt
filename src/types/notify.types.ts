import React from "react";

/**
 * Theme mode options for the modal.
 */
type NotifyThemeMode = "light" | "dark";

/**
 * Visual variants for the modal layout.
 * Future expansion can add more variants beyond 'classic'.
 */
export type NotifyModalVariant = "classic" | "default";

// animations for modal
type NotifyModalAnimation =
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
type NotifyModalSize = "xs" | "sm" | "md" | "lg";

/**
 * Types of alert statuses.
 */
export type NotifyStatusType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "default";

/**
 * Custom styles for different modal parts.
 */
interface NotifyModalStyle {
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
  themeMode?: NotifyThemeMode;
  allowOutsideClick?: boolean;
  defaultSize?: NotifyModalSize;
  showCancelIcon?: boolean;
  cancelIcon?: React.ReactNode | string;
  style?: NotifyModalStyle;
}

/**
 * Props for a single Notify modal alert.
 */
export interface NotifyModalProps extends NotifyGlobalConfigProps {
  open: boolean;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  size?: NotifyModalSize;
  status: NotifyStatusType;
  icon?: NotifyStatusType | Exclude<string, NotifyStatusType> | React.ReactNode;
  showConfirmButton?: boolean;
  confirmButtonText?: string | React.ReactNode;
  iconType?: NotifyModalVariant;
  animation?: NotifyModalAnimation;
  showCancelButton?: boolean;
  cancelButtonText?: string | React.ReactNode;
  variant?: NotifyModalVariant;
  resolve: ((value: string) => void) | null;
  reject: ((reason: string) => void) | null;
}
