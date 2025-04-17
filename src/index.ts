import "./style/theme.css";
import "./style/core.css";
import "./style/classicModal.css";
import "./style/defaultModal.css";

export { showNotifyModal } from "./core/ShowNotifyModal";
export { setNotifyModalDefaults } from "./core/notifyGlobals";

export type {
  NotifyGlobalConfigProps,
  NotifyModalProps,
} from "./types/notify.types";
