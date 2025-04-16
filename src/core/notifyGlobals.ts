import { NotifyGlobalConfigProps } from "../types/notify.types";

// Default modal config state
let notifyModalDefaults: NotifyGlobalConfigProps = {
  themeMode: "light",
  allowOutsideClick: true,
  defaultSize: "sm",
  showCancelIcon: false,
  cancelIcon: null,
  style: {},
};

/**
 * Get the current global defaults for notify-bold modals
 */
export const getNotifyModalDefaults = (): NotifyGlobalConfigProps =>
  notifyModalDefaults;

/**
 * Set or update global defaults for notify-bold modals
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
