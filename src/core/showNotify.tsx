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
): Promise<"confirm" | "dismiss"> => {
  // Get global modal defaults
  const defaults = getNotifyDefaults();

  // Create a new DOM container if one doesn't already exist
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container); // Append the new container to the body
  }

  return new Promise((resolve, reject) => {
    const root = createRoot(container!); // Create a React root using the container

    // Handle modal close events
    const handleClose = (result: "confirm" | "dismiss") => {
      if (root) {
        root.unmount(); // Unmount the modal
      }
      container?.remove(); // Remove the modal container from the DOM
      container = null; // Reset the container

      // Resolve or reject the promise based on the modal's outcome
      if (result === "confirm") {
        resolve("confirm"); // Confirm button clicked
      } else {
        reject("dismiss"); // Dismiss button or outside click
      }
    };

    // Render the modal variant based on the provided variant or fallback to default
    if (root) {
      root.render(
        <Modal
          modal={{
            open: true,
            title: props.title || "",
            message: props.message || "",
            status: props.status || "default",
            variant: props.variant ?? "default",
            size: props.size ?? defaults.defaultSize,
            icon: props.icon ?? props.status,
            iconType: props?.iconType ?? "classic",
            showConfirmButton: props.showConfirmButton,
            confirmButtonText: props.confirmButtonText ?? "Okay",
            showCancelButton: props.showCancelButton,
            cancelButtonText: props.cancelButtonText ?? "Cancel",
            showCancelIcon: props.showCancelIcon,
            animation: props.animation ?? "slide-up",
            cancelIcon: props.cancelIcon ?? defaults.cancelIcon,
            style: { ...defaults.style, ...props.style },
            themeMode: props.themeMode ?? defaults.themeMode,
            allowOutsideClick:
              props.allowOutsideClick ?? defaults.allowOutsideClick,
            resolve: () => handleClose("confirm"),
            reject: () => handleClose("dismiss"),
          }}
        />
      );
    }
  });
};
