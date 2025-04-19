import "./style/theme.css";
import "./style/core.css";
import "./style/classicVariant.css";
import "./style/defaultVariant.css";
import "./style/minimalVariant.css";

export { showNotify } from "./core/showNotify";
export { setNotifyDefaults } from "./core/notifyGlobals";

export type {
  NotifyGlobalConfigProps,
  NotifyProps,
} from "./types/notify.types";
