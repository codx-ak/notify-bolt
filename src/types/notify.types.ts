import React from "react";

/**
 * Theme mode options for the modal.
 */
type NotifyThemeMode = "light" | "dark";

/**
 * Visual variants for the modal layout.
 * Future expansion can add more variants beyond 'classic'.
 */
type NotifyModalVariant = "classic";

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
 * Global configuration options shared across all notify-bold modals.
 */
export interface NotifyGlobalConfigProps {
  themeMode?: NotifyThemeMode;
  allowOutsideClick?: boolean;
  defaultSize?: NotifyModalSize;
  showCancelIcon?: boolean;
  cancelIcon?: React.ReactNode | string | null;
  style?: NotifyModalStyle;
}

/**
 * Props for a single Notify modal alert.
 */
export interface NotifyModalProps extends NotifyGlobalConfigProps {
  open: boolean;
  title: string;
  message: string;
  size?: NotifyModalSize;
  status: NotifyStatusType;
  icon?: React.ReactNode | string | null;
  showConfirmButton?: boolean;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  variant?: NotifyModalVariant;
  resolve: ((value: string) => void) | null;
  reject: ((reason: string) => void) | null;
}
