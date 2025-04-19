import { NotifyGlobalConfigProps } from "../types/notify.types";
import IconClose from "../assets/CloseIcon";

// Default modal config state
let notifyModalDefaults: NotifyGlobalConfigProps = {
  themeMode: "light",
  allowOutsideClick: true,
  defaultSize: "sm",
  showCancelIcon: false,
  cancelIcon: <IconClose />,
  style: {},
};

/**
 * Get the current global defaults for notify-bolt modals
 */
export const getNotifyModalDefaults = (): NotifyGlobalConfigProps =>
  notifyModalDefaults;

/**
 * Set or update global defaults for notify-bolt modals
 * @param config Partial config to override defaults
 */
export const setNotifyModalDefaults = (
  config: Partial<NotifyGlobalConfigProps>
): void => {
  notifyModalDefaults = {
    ...notifyModalDefaults,
    ...config,
    style: {
      ...notifyModalDefaults.style,
      ...config.style,
    },
  };
};
