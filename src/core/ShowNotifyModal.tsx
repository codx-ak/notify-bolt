import { createRoot } from "react-dom/client";
import { NotifyModalProps } from "../types/notify.types";
import { getNotifyModalDefaults } from "./notifyGlobals";
import ClassicNotifyModal from "../components/modal/ClassicNotifyModal";

// Variable to store the DOM container for the modal
let container: HTMLDivElement | null = null;

export const showNotifyModal = (
  props: Omit<
    Partial<NotifyModalProps>,
    "open" | "resolve" | "reject" | "defaultSize"
  >
): Promise<"confirm" | "dismiss"> => {
  // Get global modal defaults
  const defaults = getNotifyModalDefaults();

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

    const renderModalVariant = () => {
      switch (props.variant ?? "classic") {
        case "classic":
          return (
            <ClassicNotifyModal
              modal={{
                open: true,
                title: props.title || "",
                message: props.message || "",
                status: props.status || "default",
                variant: "classic",
                size: props.size || defaults.defaultSize || "sm",
                icon: props.icon ?? null,
                showConfirmButton: props.showConfirmButton ?? false,
                confirmButtonText: props.confirmButtonText ?? "Okay",
                showCancelButton: props.showCancelButton ?? false,
                cancelButtonText: props.cancelButtonText ?? "Cancel",
                showCancelIcon: props.showCancelIcon ?? true,
                cancelIcon: props.cancelIcon ?? null,
                style: { ...defaults.style, ...props.style },
                themeMode: props.themeMode || "light",
                allowOutsideClick:
                  props.allowOutsideClick ?? defaults.allowOutsideClick,
                resolve: () => handleClose("confirm"),
                reject: () => handleClose("dismiss"),
              }}
            />
          );

        default:
          return null;
      }
    };

    // Render the modal variant based on the provided variant or fallback to default
    if (root) {
      root.render(renderModalVariant());
    }
  });
};
