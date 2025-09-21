export const propsList = [
  {
    name: "title",
    types: ["string", "React.ReactNode"],
    default: `""`,
    description:
      "The title displayed at the top of the modal. Accepts plain text or a React component for rich content.",
    examples: [
      `showNotify({ title: "Are you sure?" });`,
      `showNotify({ title: <strong>Important Notice</strong> });`,
    ],
  },
  {
    name: "message",
    types: ["string", "React.ReactNode"],
    default: `""`,
    description:
      "The main body content of the modal. Can be simple text or a custom JSX structure.",
    examples: [
      `showNotify({ message: "This action cannot be undone." });`,
      `showNotify({ message: <p>Please <em>read carefully</em> before proceeding.</p> });`,
    ],
  },
  {
    name: "status",
    types: ["success", "error", "warning", "info", "default"],
    default: `"default"`,
    description:
      "Determines the modal's theme (color and icon) based on the context, like 'success' or 'error'.",
    examples: [`showNotify({ status: "success" });`],
  },
  {
    name: "variant",
    types: ["classic", "default"],
    default: `"classic"`,
    description:
      "Sets the modal's layout style. 'Classic' for traditional, 'Default' for a simpler appearance.",
    examples: [`showNotify({ variant: "classic" });`],
  },
  {
    name: "size",
    types: ["xs", "sm", "md", "lg"],
    default: `"sm"`,
    description:
      "Adjusts the size of the modal window. Useful for alerts, confirmations, and larger dialogs.",
    examples: [`showNotify({ size: "xs" });`],
  },
  {
    name: "icon",
    types: ["string", "React.ReactNode", "status"],
    default: `"status"`,
    description:
      "Custom icon for the modal. Accepts emoji strings, custom React elements.",
    examples: [
      `showNotify({ icon: "🔥" });`,
      `showNotify({ icon: <CustomIcon /> });`,
    ],
  },
  {
    name: "iconType",
    types: ["classic", "outline"],
    default: `"classic"`,
    description:
      "Specifies whether the icon is rendered in a filled ('classic') or outlined style.",
    examples: [`showNotify({ iconType: "classic" });`],
  },
  {
    name: "showConfirmButton",
    types: ["boolean"],
    default: `false`,
    description: "If true, displays a confirm button for positive actions.",
    examples: [`showNotify({ showConfirmButton: true });`],
  },
  {
    name: "confirmButtonText",
    types: ["string", "React.ReactNode"],
    default: `"Okay"`,
    description: "Label text or JSX for the confirm button.",
    examples: [
      `showNotify({ confirmButtonText: "Yes, continue" });`,
      `showNotify({ confirmButtonText: <span>Proceed</span> });`,
    ],
  },
  {
    name: "showCancelButton",
    types: ["boolean"],
    default: `false`,
    description:
      "If true, shows a cancel button for dismissing the modal without action.",
    examples: [`showNotify({ showCancelButton: true });`],
  },
  {
    name: "cancelButtonText",
    types: ["string", "React.ReactNode"],
    default: `"Cancel"`,
    description: "Custom label for the cancel button.",
    examples: [
      `showNotify({ cancelButtonText: "Abort" });`,
      `showNotify({ cancelButtonText: <strong>Cancel</strong> });`,
    ],
  },
  {
    name: "showDenyButton",
    types: ["boolean"],
    default: `false`,
    description:
      "If true, displays a deny button, offering an alternative to confirm/cancel.",
    examples: [`showNotify({ showDenyButton: true });`],
  },
  {
    name: "denyButtonText",
    types: ["string", "React.ReactNode"],
    default: `"Deny"`,
    description: "Label text or JSX for the deny button.",
    examples: [
      `showNotify({ denyButtonText: "No, thanks" });`,
      `showNotify({ denyButtonText: <span>Refuse</span> });`,
    ],
  },
  {
    name: "showCloseIcon",
    types: ["boolean"],
    default: `true`,
    description: "Whether a close (X) icon is displayed on the modal header.",
    examples: [`showNotify({ showCloseIcon: false });`],
  },
  {
    name: "closeIcon",
    types: ["string", "React.ReactNode"],
    default: `"IconClose"`,
    description: "Custom close icon element or string label.",
    examples: [
      `showNotify({ closeIcon: "❌" });`,
      `showNotify({ closeIcon: <div>X</div> });`,
    ],
  },
  {
    name: "mode",
    types: ["light", "dark"],
    default: `"light"`,
    description:
      "Switches between light and dark theme modes for modal appearance.",
    examples: [`showNotify({ themeMode: "dark" });`],
  },
  {
    name: "animation",
    types: [
      "fade",
      "slide-up",
      "slide-down",
      "slide-left",
      "slide-right",
      "zoom-in",
      "zoom-out",
    ],
    default: `"slide-up"`,
    description:
      "Specifies the entrance animation style for the modal transition.",
    examples: [`showNotify({ animation: "zoom-in" });`],
  },
  {
    name: "timer",
    types: ["number"],
    default: `undefined`,
    description:
      "Automatically closes the modal after the specified time (in milliseconds).",
    examples: [`showNotify({ timer: 3000 });`],
  },
  {
    name: "timerProgressBar",
    types: ["boolean"],
    default: `false`,
    description: "Shows a visual progress bar when timer is active.",
    examples: [`showNotify({ timerProgressBar: true });`],
  },
  {
    name: "allowOutsideClick",
    types: ["boolean"],
    default: `false`,
    description: "Enables closing the modal by clicking outside of it.",
    examples: [`showNotify({ allowOutsideClick: true });`],
  },
  {
    name: "focusConfirm",
    types: ["boolean"],
    default: `true`,
    description:
      "Automatically focuses the confirm button when the modal appears.",
    examples: [`showNotify({ focusConfirm: true });`],
  },
  {
    name: "onDidOpen",
    types: ["() => void"],
    default: `undefined`,
    description:
      "Callback function triggered immediately after the modal is opened.",
    examples: [
      `showNotify({ onDidOpen: () => console.log("Modal opened!") });`,
    ],
  },
  {
    name: "onWillClose",
    types: ["() => void"],
    default: `undefined`,
    description: "Callback function triggered right before the modal closes.",
    examples: [
      `showNotify({ onWillClose: () => console.log("Modal closing...") });`,
    ],
  },
  {
    name: "celebrate",
    types: ["boolean"],
    default: `false`,
    description:
      "Triggers a celebration animation (like confetti) when the modal opens.",
    examples: [`showNotify({ celebrate: true });`],
  },
  {
    name: "celebrationType",
    types: ["basic", "random", "realistic", "fireworks", "snow", "pride"],
    default: `"pride"`,
    description:
      "Specifies the type of celebration animation to display when 'celebrate' is true.",
    examples: [`showNotify({ celebrationType: "fireworks" });`],
  },
  {
    name: "template",
    types: [
      "React.ReactNode",
      "(actions: { resolve: () => void; reject: () => void }) => React.ReactNode",
    ],
    default: `"null"`,
    description:
      "Completely custom modal body. Can access action handlers for confirm/deny within the template function.",
    examples: [
      `showNotify({ template: <div>Custom Modal</div> });`,
      `showNotify({ template: ({ resolve, reject }) => (
        <div>
          <p>Custom Content</p>
          <button onClick={resolve}>Accept</button>
          <button onClick={reject}>Decline</button>
        </div>
      ) });`,
    ],
  },
  {
    name: "resolve",
    types: [`("confirm" | "deny") => void)`],
    default: `"null"`,
    description:
      "Programmatic handler to resolve the modal manually with 'confirm' or 'deny'. This behaves like a promise `.then()` handler.",
    examples: [
      `showNotify({
       title:"testing" 
       }).then((res) => {
        if (res === "confirm") {
          // Handle confirm logic
          console.log("Confirmed!");
        } else if (res === "deny") {
          // Handle deny logic
          console.log("Denied!");
        }
      });`,
    ],
  },
  {
    name: "reject",
    types: ["() => void"],
    default: `"null"`,
    description:
      "Function to reject the modal action. This behaves like a promise `.catch()` handler.",
    examples: [
      `showNotify({ 
      title:"testing" 
      }).catch((error) => {
        // Handle reject logic
        console.log("Action rejected", error);
      });`,
    ],
  },
  {
    name: "style",
    types: ["object"],
    default: `"{}"`,
    description:
      "Custom inline styles to override modal components like button, modal container, overlay, etc.",
    examples: [
      `showNotify({ 
        style: {
          modal: { backgroundColor: "lightblue" },
          title: { color: "darkblue" },
          button: { backgroundColor: "green" }
        } 
      });`,
    ],
  },
];
