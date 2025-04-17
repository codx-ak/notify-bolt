# notify-bolt

[![npm version](https://img.shields.io/npm/v/notify-bolt.svg)](https://www.npmjs.com/package/notify-bolt)
[![npm downloads](https://img.shields.io/npm/dm/notify-bolt.svg)](https://www.npmjs.com/package/notify-bolt)
[![license](https://img.shields.io/github/license/codx-ak/notify-bolt.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/codx-ak/notify-bolt.svg)](https://github.com/codx-ak/notify-bolt)
[![GitHub issues](https://img.shields.io/github/issues/codx-ak/notify-bolt.svg)](https://github.com/codx-ak/notify-bolt/issues)

A lightweight and themeable modal alert system for React, built with customization in mind. Supports classic layout, dark/light themes, and global config — ideal for confirmations, errors, success messages, and more.

---

## ✨ Features

- ✅ Easy to integrate
- 🎨 Customizable styles and colors
- 🌗 Light/Dark mode support
- ⚡ Zero Dependencies
- 💡 Built-in variants: `classic`,`default`
- ⚙️ Global default settings

---

## 📦 Installation

```bash
npm install notify-bolt
```

or

```bash
yarn add notify-bolt
```

---

## 🚀 Usage

```tsx
import { showNotifyModal } from "notify-bolt";

const handleClick = () => {
  showNotifyModal({
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

---

## 🔄 Available Props

| Prop                | Type                                                                                              | Default     | Description                                  |
| ------------------- | ------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------- |
| `title`             | `string`                                                                                          | `""`        | Modal title text                             |
| `message`           | `string`                                                                                          | `""`        | Content message shown inside the modal       |
| `status`            | `"success"`, `"error"`, `"warning"`, `"info"`, `"default"`                                        | `"default"` | Status type (controls icon and color)        |
| `variant`           | `"classic"` ,`"default"`                                                                          | `"classic"` | Visual layout style of the modal             |
| `size`              | `"xs"`, `"sm"`, `"md"`, `"lg"`                                                                    | `"sm"`      | Modal size                                   |
| `icon`              | `React.ReactNode`                                                                                 | `null`      | Optional custom icon override                |
| `showConfirmButton` | `boolean`                                                                                         | `false`     | Whether to display the confirm button        |
| `confirmButtonText` | `string`                                                                                          | `"Okay"`    | Label for the confirm button                 |
| `showCancelButton`  | `boolean`                                                                                         | `false`     | Whether to display the cancel button         |
| `cancelButtonText`  | `string`                                                                                          | `"Cancel"`  | Label for the cancel button                  |
| `showCancelIcon`    | `boolean`                                                                                         | `true`      | Show cancel (X) icon in the modal header     |
| `cancelIcon`        | `React.ReactNode`                                                                                 | `null`      | Custom cancel icon                           |
| `style`             | `Object`                                                                                          | `{}`        | Style overrides for different modal sections |
| `themeMode`         | `"light"`, `"dark"`                                                                               | `"light"`   | Theme mode of the modal                      |
| `allowOutsideClick` | `boolean`                                                                                         | `false`     | Whether clicking outside                     |
| `animation`         | `"slide-up"`, `"slide-down"`, `"slide-left"`, `"slide-right"`,`"zoom-in"`, `"zoom-out"`,`"fade"`, | `slide-up`  | Alert Modal animations                       |

---

## 🌍 Global Defaults

```tsx
import { setNotifyModalDefaults } from "notify-bolt";

setNotifyModalDefaults({
  themeMode: "light",
  defaultSize: "sm",
  allowOutsideClick: true,
  style: {},
});
```

---

## 🛠 License

MIT © [Ak Moorthi](https://github.com/codx-ak)
