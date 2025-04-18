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
  <a href="https://github.com/codx-ak/notify-bolt/stargazers">
    <img src="https://img.shields.io/github/stars/codx-ak/notify-bolt.svg" alt="GitHub stars" />
  </a>
  <a href="https://github.com/codx-ak/notify-bolt/issues">
    <img src="https://img.shields.io/github/issues/codx-ak/notify-bolt.svg" alt="GitHub issues" />
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

## 🔧 Configuration Params

| Prop                | Type                                                                                               | Default      | Description                     |
| ------------------- | -------------------------------------------------------------------------------------------------- | ------------ | ------------------------------- |
| `title`             | `string \| React.ReactNode`                                                                        | `""`         | Modal title text                |
| `message`           | `string \| React.ReactNode`                                                                        | `""`         | Message inside the modal        |
| `status`            | `"success"`, `"error"`, `"warning"`, `"info"`, `"default"`                                         | `"default"`  | Controls icon and theme         |
| `variant`           | `"classic"`, `"minimal"`,`"default"`                                                               | `"classic"`  | Modal layout style              |
| `size`              | `"xs"`, `"sm"`, `"md"`, `"lg"`                                                                     | `"sm"`       | Modal size                      |
| `icon`              | `React.ReactNode \| string \| status`                                                              | `status`     | Custom or default icon          |
| `showConfirmButton` | `boolean`                                                                                          | `false`      | Show confirm button             |
| `confirmButtonText` | `string \| React.ReactNode`                                                                        | `"Okay"`     | Confirm button label            |
| `showCancelButton`  | `boolean`                                                                                          | `false`      | Show cancel button              |
| `cancelButtonText`  | `string \| React.ReactNode`                                                                        | `"Cancel"`   | Cancel button label             |
| `showCancelIcon`    | `boolean`                                                                                          | `true`       | Show dismiss/close icon         |
| `cancelIcon`        | `React.ReactNode \| string`                                                                        | `IconClose`  | Custom cancel icon              |
| `style`             | `NotifyStyleTypes`                                                                                 | `{}`         | Override modal styles           |
| `themeMode`         | `"light"`, `"dark"`                                                                                | `"light"`    | Modal theme mode                |
| `allowOutsideClick` | `boolean`                                                                                          | `false`      | Enable dismiss by outside click |
| `animation`         | `"fade"`, `"slide-up"`, `"slide-down"`, `"slide-left"`, `"slide-right"`, `"zoom-in"`, `"zoom-out"` | `"slide-up"` | Transition animation            |

## 🌍 Global Defaults

```tsx
import { setNotifyDefaults } from "notify-bolt";

setNotifyDefaults({
  themeMode: "light",
  defaultSize: "sm",
  allowOutsideClick: true,
  style: {},
});
```

## 🛠 License

MIT © [Ak Moorthi](https://github.com/codx-ak)
