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
- 🎨 Fully customizable
- 🌗 Light & Dark mode support
- ⚡ Zero dependencies
- 💡 Built-in variants: `classic`, `default`, `"minimal"`
- 🧩 Extendable global defaults
- 🎥 Modal animations
- 🔄 Confirm/Dismiss handling with `Promise`

## 📦 Installation

```bash
npm install notify-bolt
# or
yarn add notify-bolt
```

## 🚀 Usage

```tsx
import { showNotify } from "notify-bolt";

const handleClick = () => {
  showNotify({
    title: "Delete this item?",
    message: "This action is permanent. Do you wish to proceed?",
    variant: "classic",
    themeMode: "dark",
    status: "warning",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(() => {
      // Handle Confirm
    })
    .catch(() => {
      // Handle Dismiss
    });
};
```

## 🔧 Configuration

<p style="display:flex; gap:10px;">
    🔗 Full list of options, props, and examples available at the
   <a href="https://codx-ak.github.io/notify-bolt?page=docs"  target="_blank">
    Notify Bolt Playground.
  </a>
  </p>
