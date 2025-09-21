<div align="center">
  <img src="https://codx-ak.github.io/notify-bolt/logo.png" width="120" alt="Notify Bolt Logo" />
  <h2 align="center">✨ Experience Notify Bolt in Action</h2>
  <p align="center">
  <a href="https://www.npmjs.com/package/notify-bolt">
    <img src="https://img.shields.io/npm/v/notify-bolt.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/notify-bolt">
    <img src="https://img.shields.io/npm/dm/notify-bolt.svg" alt="npm downloads" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/codx-ak/notify-bolt.svg" alt="license" />
  </a>
</p>
  <p align="center">
    A blazing-fast, customizable, and elegant modal notification system for React.
  </p>
  <a href="https://codx-ak.github.io/notify-bolt/" target="_blank">
    <img src="https://img.shields.io/badge/🚀 OPEN PLAYGROUND -Try Live Now-blueviolet?style=for-the-badge&logo=vercel" />
  </a>
</div>

## ✨ Features

- ✅ Easy to integrate
- 🎨 Fully customizable (styles, icons, animations, etc.)
- 🌗 Light & Dark mode support
- ⚡ Zero dependencies
- 💡 Built-in variants: `classic`, `default`
- 🧩 Extendable global defaults with `setNotifyDefaults`
- 🎥 Smooth modal animations
- 🔄 Async handling with `Promise` (`confirm`, `deny`, `dismiss`)

## 📦 Installation

```bash
npm install notify-bolt
# or
yarn add notify-bolt
# or
pnpm add notify-bolt
```

## 🚀 Quick Usage

```tsx
import { showNotify } from "notify-bolt";

const handleClick = () => {
  showNotify({
    title: "Delete this item?",
    message: "This action is permanent. Do you wish to proceed?",
    variant: "classic",
    mode: "dark",
    status: "warning",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then((result) => {
      if (result === "confirm") {
        // ✅ User confirmed
      } else if (result === "deny") {
        // ⚠️ User denied
      }
    })
    .catch(() => {
      // ❌ User dismissed
    });
};
```

## 🔧 Global Configuration

You can set defaults once and reuse them across all modals:

```tsx
import { setNotifyDefaults } from "notify-bolt";

setNotifyDefaults({
  mode: "light",
  defaultSize: "sm",
  animation: "slide-up",
  confirmButtonText: "Okay",
  cancelButtonText: "Cancel",
  icons: {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  },
});
```

---

## 📖 Documentation

For the full list of **options, props, examples, and playground**, check out the  
👉 [Notify Bolt Playground & Docs](https://codx-ak.github.io/notify-bolt?page=docs)

---

## 📜 License

MIT © [codx-ak](https://github.com/codx-ak)
