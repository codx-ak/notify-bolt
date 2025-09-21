import { createRoot, Root } from 'react-dom/client';
import type { NotifyOptions } from './notify.types';
import { getNotifyDefaults } from './SetNotifyDefaults';
import Modal from './NotifyModal';

// Global container for the modal DOM node
let container: HTMLDivElement | null = null;
let root: Root | null = null; // store React root globally

/**
 * Show a Notify Bolt modal
 * @param props Partial props for the modal
 * @returns Promise that resolves to 'confirm' | 'deny' or rejects with 'dismiss'
 */
export const showNotify = (props: NotifyOptions): Promise<'confirm' | 'deny'> => {
  const defaults = getNotifyDefaults();

  // Add a body lock class to prevent background scrolling
  document.body.classList.add('notify-lock');

  // Create a new DOM container if not already present
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  // Create root only once
  if (!root) {
    root = createRoot(container);
  }

  return new Promise((resolve, reject) => {
    let autoHideTimeout: ReturnType<typeof setTimeout> | undefined;

    /**
     * Handles closing the modal
     * @param result outcome of the modal
     */
    const handleClose = (result: 'confirm' | 'deny' | 'dismiss') => {
      // Unmount modal from React root
      if (root) root.unmount();

      // Remove container from DOM and reset
      container?.remove();
      container = null;
      root = null; // reset root so next modal can create a new root
      // Remove body lock
      document.body.classList.remove('notify-lock');

      // Clear any auto-hide timer
      if (autoHideTimeout) clearTimeout(autoHideTimeout);

      // Resolve or reject based on modal result
      if (result === 'confirm' || result === 'deny') resolve(result);
      else reject(result);
    };

    // Setup auto-dismiss if timer is specified
    if (typeof props.timer === 'number' && props.timer > 0) {
      autoHideTimeout = window.setTimeout(() => {
        handleClose('dismiss');
      }, props.timer);
    }

    if (root)
      // Render the modal
      root.render(
        <Modal
          modal={{
            open: true,
            title: props.title ?? '',
            message: props.message ?? '',
            status: props.status ?? 'default',
            variant: props.variant ?? defaults.variant,
            size: props.size ?? defaults.defaultSize,
            icon: props.icon ?? defaults.icons?.[props.status ?? 'default'] ?? props.status,
            iconType: props.iconType ?? defaults.iconType,
            showConfirmButton: props.showConfirmButton ?? true,
            confirmButtonText:
              props.confirmButtonText ??
              (props.showCancelButton ? 'Confirm' : defaults.confirmButtonText),
            showCancelButton: props.showCancelButton ?? false,
            cancelButtonText: props.cancelButtonText ?? defaults.cancelButtonText,
            showCloseIcon: props.showCloseIcon ?? defaults.showCloseIcon,
            animation: props.animation ?? defaults.animation,
            closeIcon: props.closeIcon ?? defaults.closeIcon,
            style: { ...defaults.style, ...props.style },
            mode: defaults.mode,
            allowOutsideClick: props.allowOutsideClick ?? defaults.allowOutsideClick,
            timer: props.timer,
            timerProgressBar: props.timerProgressBar ?? false,
            focusConfirm: props.focusConfirm ?? true,
            denyButtonText: props.denyButtonText ?? defaults.denyButtonText,
            showDenyButton: props.showDenyButton ?? false,
            template: props.template ?? null,
            celebrate: props.celebrate ?? defaults.celebrate,
            celebrationType: props.celebrationType ?? defaults.celebrationType,
            onDidOpen: props.onDidOpen,
            onWillClose: props.onWillClose,
            resolve: (type: 'confirm' | 'deny') => handleClose(type),
            reject: () => handleClose('dismiss'),
          }}
        />
      );
  });
};
