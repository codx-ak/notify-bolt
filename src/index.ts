import "./style/theme.css";
import "./style/core.css";
import "./style/icon.css";
import "./style/variant.css";

export { showNotify } from "./core/showNotify";
export { setNotifyDefaults } from "./core/notifyGlobals";

export type {
  NotifyGlobalConfigProps,
  NotifyProps,
} from "./types/notify.types";
