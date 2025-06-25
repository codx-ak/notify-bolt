import { createRoot } from "react-dom/client";
import { NotifyProps } from "../types/notify.types";
import { getNotifyDefaults } from "./notifyGlobals";
import Modal from "./Modal";

// Variable to store the DOM container for the modal
let container: HTMLDivElement | null = null;

export const showNotify = (
  props: Omit<
    Partial<NotifyProps>,
    "open" | "resolve" | "reject" | "defaultSize"
  >
): Promise<"confirm" | "deny" | "dismiss"> => {
  // Get global modal defaults
  const defaults = getNotifyDefaults();

  // Add modal-lock class to body to prevent background interaction
  document.body.classList.add("notify-lock");

  // Create a new DOM container if one doesn't already exist
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container); // Append the new container to the body
  }

  return new Promise((resolve, reject) => {
    const root = createRoot(container!); // Create a React root using the container
    let autoHideTimeout: number | undefined;

    // Handle modal close events
    const handleClose = (result: "confirm" | "dismiss" | "deny") => {
      if (root) {
        root.unmount(); // Unmount the modal
      }
      container?.remove(); // Remove the modal container from the DOM
      container = null; // Reset the container

      // Remove modal-lock from body
      document.body.classList.remove("notify-lock");

      clearTimeout(autoHideTimeout);

      // Resolve or reject the promise based on the modal's outcome
      if (result === "confirm" || result === "deny") {
        resolve(result);
      } else {
        reject(result);
      }
    };

    if (typeof props.timer === "number" && props.timer > 0) {
      autoHideTimeout = setTimeout(() => {
        handleClose("dismiss");
      }, props.timer);
    }

    // Render the modal variant based on the provided variant or fallback to default
    if (root) {
      root.render(
        <Modal
          modal={{
            open: true,
            title: props.title || "",
            message: props.message || "",
            status: props.status || "default",
            variant: props.variant ?? defaults.variant,
            size: props.size ?? defaults.defaultSize,
            icon: props.icon ?? props.status,
            iconType: props?.iconType ?? defaults.iconType,
            showConfirmButton:
              props.showConfirmButton ?? defaults.showConfirmButton,
            confirmButtonText:
              props.confirmButtonText ?? defaults.confirmButtonText,
            showCancelButton:
              props.showCancelButton ?? defaults.showCancelButton,
            cancelButtonText:
              props.cancelButtonText ?? defaults.cancelButtonText,
            showCloseIcon: props.showCloseIcon ?? defaults.showCloseIcon,
            animation: props.animation ?? defaults.animation,
            closeIcon: props.closeIcon ?? defaults.closeIcon,
            style: { ...defaults.style, ...props.style },
            themeMode: props.themeMode ?? defaults.themeMode,
            allowOutsideClick:
              props.allowOutsideClick ?? defaults.allowOutsideClick,
            timer: props.timer,
            timerProgressBar: props.timerProgressBar ?? false,
            focusConfirm: props.focusConfirm ?? true,
            denyButtonText: props.denyButtonText ?? defaults.denyButtonText,
            showDenyButton: props.showDenyButton ?? defaults.showDenyButton,
            template:
              typeof props.template === "function"
                ? props.template
                : props.template ?? null,
            celebrate: props?.celebrate ?? defaults.celebrate,
            celebrationType: props?.celebrationType ?? defaults.celebrationType,
            onDidOpen: props.onDidOpen,
            onWillClose: props.onWillClose,
            resolve: (type: "confirm" | "deny") => handleClose(type),
            reject: () => handleClose("dismiss"),
          }}
        />
      );
    }
  });
};
