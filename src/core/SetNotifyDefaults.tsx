import { NotifyDefaultOptions } from './notify.types';
import IconClose from '../assets/CloseIcon';

/**
 * Default global configuration for all Notify Bolt modals.
 * This object holds all shared defaults that can be updated via `setNotifyDefaults`.
 */
const initialDefaults: NotifyDefaultOptions = {
  mode: 'light',
  defaultSize: 'sm',
  allowOutsideClick: true,
  showCloseIcon: false,
  celebrate: false,
  celebrationType: 'pride',
  variant: 'default',
  animation: 'slide-up',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Okay',
  denyButtonText: 'Deny',
  iconType: 'classic',
  closeIcon: <IconClose />,
  style: {},
  icons: {},
};

let notifyDefaults: NotifyDefaultOptions = { ...initialDefaults };

/**
 * Get the current global defaults.
 * Returns a frozen copy so consumers can’t accidentally mutate it.
 */
export const getNotifyDefaults = (): NotifyDefaultOptions => Object.freeze({ ...notifyDefaults });

/**
 * Set or update global defaults for Notify Bolt modals.
 * Safely merges nested objects (style and icons) to avoid overwriting existing defaults.
 *
 * @param config Partial configuration object containing only the values you want to override
 */
export const setNotifyDefaults = (config: Partial<NotifyDefaultOptions>): void => {
  notifyDefaults = {
    mode: config.mode ?? notifyDefaults.mode,
    defaultSize: config.defaultSize ?? notifyDefaults.defaultSize,
    allowOutsideClick: config.allowOutsideClick ?? notifyDefaults.allowOutsideClick,
    showCloseIcon: config.showCloseIcon ?? notifyDefaults.showCloseIcon,
    celebrate: config.celebrate ?? notifyDefaults.celebrate,
    celebrationType: config.celebrationType ?? notifyDefaults.celebrationType,
    variant: config.variant ?? notifyDefaults.variant,
    animation: config.animation ?? notifyDefaults.animation,
    cancelButtonText: config.cancelButtonText ?? notifyDefaults.cancelButtonText,
    confirmButtonText: config.confirmButtonText ?? notifyDefaults.confirmButtonText,
    denyButtonText: config.denyButtonText ?? notifyDefaults.denyButtonText,
    iconType: config.iconType ?? notifyDefaults.iconType,
    closeIcon: config.closeIcon ?? notifyDefaults.closeIcon,
    style: {
      ...notifyDefaults.style,
      ...config.style,
    },
    icons: {
      ...notifyDefaults.icons,
      ...config.icons,
    },
  };
};

/**
 * Reset Notify defaults back to their initial values.
 */
export const resetNotifyDefaults = (): void => {
  notifyDefaults = { ...initialDefaults };
};
