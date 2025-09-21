import React from 'react';

/** * Visual variants for the modal layout. */
export type NotifyVariantTypes = 'classic' | 'default';

/** * Icon styles for the modal. */
export type NotifyIconTypes = 'classic' | 'outline';

/** * Modal size options. */
export type NotifySizeTypes = 'xs' | 'sm' | 'md' | 'lg';

/** * Types of celebration effects. */
export type NotifyCelebrationTypes =
  | 'basic'
  | 'random'
  | 'realistic'
  | 'fireworks'
  | 'snow'
  | 'pride';

/** * Animation types for modals. */
type NotifyAnimationTypes =
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out';

/** * Status types for alerts. */
export type NotifyStatusTypes = 'success' | 'error' | 'info' | 'warning' | 'default';

/** * Optional styles for different modal elements. */
interface NotifyStyleTypes {
  title?: React.CSSProperties;
  message?: React.CSSProperties;
  icon?: React.CSSProperties;
  modal?: React.CSSProperties;
  overlay?: React.CSSProperties;
  button?: React.CSSProperties;
  buttonContainer?: React.CSSProperties;
  modalHeader?: React.CSSProperties;
}

/** * Global configuration props for Notify Bolt. */
export interface NotifyDefaultOptions {
  mode?: 'light' | 'dark';
  defaultSize?: NotifySizeTypes;
  icons?: Partial<Record<NotifyStatusTypes, React.ReactNode | string>>;
  allowOutsideClick?: boolean;
  showCloseIcon?: boolean;
  closeIcon?: React.ReactNode | string;
  celebrate?: boolean;
  celebrationType?: NotifyCelebrationTypes;
  style?: Partial<NotifyStyleTypes>;
  variant?: NotifyVariantTypes;
  animation?: NotifyAnimationTypes;
  confirmButtonText?: string | React.ReactNode;
  cancelButtonText?: string | React.ReactNode;
  denyButtonText?: string | React.ReactNode;
  iconType?: NotifyIconTypes;
}

/** * Props for a single modal instance. */
export interface NotifyProps extends NotifyDefaultOptions {
  open: boolean;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  size?: NotifySizeTypes;
  status: NotifyStatusTypes;
  icon?: NotifyStatusTypes | string | React.ReactNode;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  timer?: number;
  timerProgressBar?: boolean;
  focusConfirm?: boolean;
  showDenyButton?: boolean;
  template?:
    | ((actions: {
        resolve: (type: 'confirm' | 'deny') => void;
        reject: () => void;
      }) => React.ReactNode)
    | React.ReactNode;
  onDidOpen?: () => void;
  onWillClose?: () => void;
  resolve: ((type: 'confirm' | 'deny') => void) | null;
  reject: (() => void) | null;
}

/** Options for showing a notification. */
export type NotifyOptions = Omit<
  Partial<NotifyProps>,
  'open' | 'resolve' | 'reject' | 'defaultSize' | 'mode' | 'icons'
>;
