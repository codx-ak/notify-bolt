export const ClassicDefaultIcon = () => (
  <div className="classic-default-icon-wrapper">
    <svg
      width="75"
      height="75"
      viewBox="0 0 64 64"
      fill="none"
      className="classic-default-icon"
    >
      <circle
        className="classic-default-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill="#E0E7FF"
      />
      <path
        className="classic-default-icon__line-path"
        d="M32 20V36"
        stroke="#6366F1"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        className="classic-default-icon__dot"
        cx="32"
        cy="44"
        r="2.5"
        fill="#6366F1"
      />
    </svg>

    {/* ✨ Sparkles */}
    <div className="classic-default-icon__sparkle sparkle-1">✦</div>
    <div className="classic-default-icon__sparkle sparkle-2">✦</div>
    <div className="classic-default-icon__sparkle sparkle-3">✦</div>
    <div className="classic-default-icon__sparkle sparkle-4">✦</div>
    <div className="classic-default-icon__sparkle sparkle-5">✦</div>
    <div className="classic-default-icon__sparkle sparkle-6">✦</div>
  </div>
);

export const ClassicErrorIcon = () => (
  <div className="classic-error-icon-wrapper">
    <svg
      width="75"
      height="75"
      viewBox="0 0 64 64"
      fill="none"
      className="classic-error-icon"
    >
      <circle
        className="classic-error-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill="#FEE4E2"
      />
      <path
        className="classic-error-icon__cross-path"
        d="M24 24L40 40M40 24L24 40"
        stroke="#F04438"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>

    {/* ✨ Sparkles */}
    <div className="classic-error-icon__sparkle sparkle-1">✦</div>
    <div className="classic-error-icon__sparkle sparkle-2">✦</div>
    <div className="classic-error-icon__sparkle sparkle-3">✦</div>
    <div className="classic-error-icon__sparkle sparkle-4">✦</div>
    <div className="classic-error-icon__sparkle sparkle-5">✦</div>
    <div className="classic-error-icon__sparkle sparkle-6">✦</div>
  </div>
);

export const ClassicInfoIcon = () => (
  <div className="classic-info-icon-wrapper">
    <svg
      width="75"
      height="75"
      viewBox="0 0 64 64"
      fill="none"
      className="classic-info-icon"
    >
      <circle
        className="classic-info-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill="#E0F2FE"
      />
      <path
        className="classic-info-icon__line-vertical"
        d="M32 28V42"
        stroke="#0EA5E9"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="classic-info-icon__line-horizontal"
        d="M32 22H32.01"
        stroke="#0EA5E9"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>

    {/* ✨ Sparkles */}
    <div className="classic-info-icon__sparkle sparkle-1">✦</div>
    <div className="classic-info-icon__sparkle sparkle-2">✦</div>
    <div className="classic-info-icon__sparkle sparkle-3">✦</div>
    <div className="classic-info-icon__sparkle sparkle-4">✦</div>
    <div className="classic-info-icon__sparkle sparkle-5">✦</div>
    <div className="classic-info-icon__sparkle sparkle-6">✦</div>
  </div>
);

export const ClassicSuccessIcon = () => (
  <div className="classic-success-icon-wrapper">
    <svg
      width="75"
      height="75"
      viewBox="0 0 64 64"
      fill="none"
      className="classic-success-icon"
    >
      {/* Circle Background */}
      <circle
        className="classic-success-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill="#D1FADF"
      />

      {/* Checkmark Path */}
      <path
        className="classic-success-icon__checkmark-path"
        d="M20 33L28 41L44 25"
        stroke="#12B76A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Sparkles */}
    <div className="classic-success-icon__sparkle sparkle-1">✦</div>
    <div className="classic-success-icon__sparkle sparkle-2">✦</div>
    <div className="classic-success-icon__sparkle sparkle-3">✦</div>
    <div className="classic-success-icon__sparkle sparkle-4">✦</div>
    <div className="classic-success-icon__sparkle sparkle-5">✦</div>
    <div className="classic-success-icon__sparkle sparkle-6">✦</div>
  </div>
);

export const ClassicWarningIcon = () => (
  <div className="classic-warning-icon-wrapper">
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className="classic-warning-icon"
    >
      {/* Circle Background */}
      <circle
        cx="32"
        cy="32"
        r="32"
        fill="#FEF3C7"
        className="classic-warning-icon__circle-background"
      />

      {/* Exclamation Mark Line */}
      <path
        d="M32 18V36"
        stroke="#F59E0B"
        strokeWidth="4"
        strokeLinecap="round"
        className="classic-warning-icon__exclamation-line"
      />

      {/* Exclamation Mark Dot */}
      <circle
        cx="32"
        cy="46"
        r="2.5"
        fill="#F59E0B"
        className="classic-warning-icon__dot"
      />
    </svg>

    {/* Sparkles */}
    <div className="classic-warning-icon__sparkle sparkle-1">✦</div>
    <div className="classic-warning-icon__sparkle sparkle-2">✦</div>
    <div className="classic-warning-icon__sparkle sparkle-3">✦</div>
    <div className="classic-warning-icon__sparkle sparkle-4">✦</div>
    <div className="classic-warning-icon__sparkle sparkle-5">✦</div>
    <div className="classic-warning-icon__sparkle sparkle-6">✦</div>
  </div>
);
