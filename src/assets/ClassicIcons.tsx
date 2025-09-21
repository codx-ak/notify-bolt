const Sparkles = ({ color }: { color: string }) => (
  <>
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div key={n} className={`classic-icon__sparkle sparkle-${n}`} style={{ color }}>
        ✦
      </div>
    ))}
  </>
);

export const ClassicDefaultIcon = ({
  color,
  background,
}: {
  color: string;
  background: string;
}) => (
  <div className="classic-default-icon-wrapper">
    <svg width="75" height="75" viewBox="0 0 64 64" fill="none" className="classic-default-icon">
      <circle
        className="classic-default-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill={background}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke={color}
        strokeWidth="1px"
        dy=".3em"
        fontSize="30"
        fill={color}
      >
        ?
      </text>
    </svg>

    {/* Sparkles */}
    <Sparkles color={color} />
  </div>
);

export const ClassicErrorIcon = ({ color, background }: { color: string; background: string }) => (
  <div className="classic-error-icon-wrapper">
    <svg width="75" height="75" viewBox="0 0 64 64" fill="none" className="classic-error-icon">
      <circle
        className="classic-error-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill={background}
      />
      <path
        className="classic-error-icon__cross-path"
        d="M24 24L40 40M40 24L24 40"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>

    {/* Sparkles */}
    <Sparkles color={color} />
  </div>
);

export const ClassicInfoIcon = ({ color, background }: { color: string; background: string }) => (
  <div className="classic-info-icon-wrapper">
    <svg width="75" height="75" viewBox="0 0 64 64" fill="none" className="classic-info-icon">
      <circle
        className="classic-info-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill={background}
      />
      <path
        className="classic-info-icon__line-vertical"
        d="M32 28V42"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="classic-info-icon__line-horizontal"
        d="M32 22H32.01"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>

    {/* Sparkles */}
    <Sparkles color={color} />
  </div>
);

export const ClassicSuccessIcon = ({
  color,
  background,
}: {
  color: string;
  background: string;
}) => (
  <div className="classic-success-icon-wrapper">
    <svg width="75" height="75" viewBox="0 0 64 64" fill="none" className="classic-success-icon">
      <circle
        className="classic-success-icon__circle-background"
        cx="32"
        cy="32"
        r="32"
        fill={background}
      />
      <path
        className="classic-success-icon__checkmark-path"
        d="M20 33L28 41L44 25"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Sparkles */}
    <Sparkles color={color} />
  </div>
);

export const ClassicWarningIcon = ({
  color,
  background,
}: {
  color: string;
  background: string;
}) => (
  <div className="classic-warning-icon-wrapper">
    <svg width="75" height="75" viewBox="0 0 64 64" fill="none" className="classic-warning-icon">
      {/* Circle Background */}
      <circle
        cx="32"
        cy="32"
        r="32"
        fill={background}
        className="classic-warning-icon__circle-background"
      />

      {/* Exclamation Line - animated like info vertical line */}
      <path
        d="M32 18V36"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        className="classic-warning-icon__line-vertical"
      />

      {/* Exclamation Dot - static (no pulse) */}
      <path
        d="M32 46H32.01"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        className="classic-warning-icon__line-horizontal"
      />
    </svg>

    {/* ✨ Sparkles */}
    <Sparkles color={color} />
  </div>
);
