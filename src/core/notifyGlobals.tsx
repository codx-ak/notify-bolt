import { NotifyGlobalConfigProps } from "../types/notify.types";
import IconClose from "../assets/CloseIcon";

// Default modal config state
let notifyDefaults: NotifyGlobalConfigProps = {
  themeMode: "light",
  allowOutsideClick: true,
  defaultSize: "sm",
  showCloseIcon: false,
  showCancelButton: false,
  showConfirmButton: true,
  showDenyButton: false,
  celebrate: false,
  celebrationType: "pride",
  variant: "default",
  animation: "slide-up",
  cancelButtonText: "Cancel",
  confirmButtonText: "Okay",
  denyButtonText: "Deny",
  iconType: "classic",
  closeIcon: <IconClose />,
  style: {},
};

/**
 * Get the current global defaults for notify-bolt modals
 */
export const getNotifyDefaults = (): NotifyGlobalConfigProps => notifyDefaults;

/**
 * Set or update global defaults for notify-bolt modals
 * @param config Partial config to override defaults
 */
export const setNotifyDefaults = (
  config: Partial<NotifyGlobalConfigProps>
): void => {
  notifyDefaults = {
    ...notifyDefaults,
    ...config,
    style: {
      ...notifyDefaults.style,
      ...config.style,
    },
  };
};
