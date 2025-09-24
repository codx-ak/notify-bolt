# 📦 Changelog

## `v1.0.4` — _Sep 23, 2025_

### ✨ New Release

- Introduced **Notify Bolt** – a customizable, promise-based modal notification system for React.
- Core features:
  - `showNotify` for showing async modals with `confirm`, `deny`, and `dismiss` support.
  - Global configuration via `setNotifyDefaults`.
  - Built-in **variants** (`default`, `classic`) with customizable layouts.
  - Multiple **status icons** (`success`, `error`, `info`, `warning`, `default`) with classic +
    outline styles.
  - Configurable **sizes**, **animations**, and **celebration effects**.
  - Supports **custom icons**, React components, or image URLs.
  - Flexible **styling overrides** for titles, messages, buttons, overlays, and containers.
  - Built-in **timer** + **progress bar** support for auto-dismiss.
- TypeScript first: ships with full type definitions.
- Tree-shakable ES module and CommonJS builds.
- Preconfigured with Rollup, ESLint, Prettier, and Husky + lint-staged for dev workflow.
