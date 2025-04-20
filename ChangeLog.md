# 📦 Changelog

## `v4.2.0` — _Apr 20, 2025_

### Fixed

- Improved the focus flow to avoid focus getting stuck on buttons, ensuring smooth modal interaction.
- Disabled background events

## `v4.1.0` — _Apr 20, 2025_

### Updated

- changed props name `showCancelIcon`, `cancelIcon` to `showCloseIcon`, `closeIcon`

### Fixed

- Fixed issues with timer and timer progress bar.

## `v4.0.0` — _Apr 20, 2025_

### Added

- Added `outline` icon type to support all variants.
- Added `timer`, `timerProgressBar`, `focusConfirm`, `showDenyButton`, `denyButtonText`, `onDidOpen`, and `onWillClose` props.

### Updated

- Separated CSS for better modularity and organization.
- Updated props for enhanced customization and flexibility.
- Improved modal behavior to support better icon animations and transitions.
- Adjusted default modal layout styles to enhance responsiveness.

### Fixed

- Fixed issues with mismatched icon colors between classic and outline icon types.
- Resolved type errors related to icon type and status combinations.

## `v3.0.0` — _Apr 19, 2025_

### 🚀 Major Release

- ✨ **New UI Variant Added**  
  Introduced a sleek new modal variant focused on minimal footprint and improved responsiveness across devices.

- 🧪 **UI Playground Overhaul**  
  Redesigned the live demo experience with better layout, previews, and interactivity for easier testing.

- 🪄 **Improved Naming Consistency**  
  Renamed props and internal types for better clarity and developer experience (DX). Old names will no longer be supported.

- 🧠 **Codebase Optimization**  
  Refactored and streamlined internal logic for better performance, modularity, and future scalability.

- 🎨 **Theming Enhancements**  
  Extended CSS variable support and introduced new tokens for finer control over UI appearance.

- ⚠️ **Breaking Changes**  
  Several props have been renamed or updated. Refer to the updated documentation and migration guide for upgrading instructions.

---

## `v2.1.0` - _Apr 18, 2025_

### Changed

- Updated `peerDependencies` to support React 17, 18, and 19.

## `v2.0.0` — _Apr 17, 2025_

### 🚀 Major Update

- 🆕 **New Default Modal Variant**  
  Introduced a new variant under the default modal type for expanded flexibility and improved UX out-of-the-box.

- 🧠 **Improved Modal Architecture**  
  Refactored internal structure to better support multiple variants with more scalable logic.

- ♻️ **Breaking Changes**  
  Default behavior may change slightly depending on usage — review updated docs or migration notes if you customized default variants.

---

## `v1.1.0` — _Apr 17, 2025_

### 🚀 New Features

- 🖼️ **Classic Modal Icons**  
  Introduced themed icon variants (`success`, `error`, `info`, `warning`, `default`) with consistent styling.

- 🎞️ **Icon Animations**  
  Added entry animations for icons — includes line drawing, checkmarks, crossmarks, and pulsing effects.

- 💫 **Modal Animations**  
  Modals now include smooth animated transitions for entry and exit, enhancing visual polish.

---

## `v1.0.1` — _Apr 17, 2025_

### 🔧 Maintenance & Improvements

- Minor updates and optimizations.
- Improved configuration consistency.
- Prepared for future feature support.

---

## `v1.0.0` — _Apr 17, 2025_

### ✨ Initial Release

- ✅ **Classic Modal Variant**  
  Built-in support for a clean, styled "classic" modal layout.

- 🎨 **Theme Support**  
  Light and dark modes via CSS variables.

- 🛠️ **Custom Styles Support**  
  Allows passing custom styles for overlay, header, buttons, etc.

- ⚙️ **Global Defaults**  
  Configure default modal behavior using global settings.
