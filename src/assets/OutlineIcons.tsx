export const OutlineSuccessIcon = ({ color }: { color: string }) => {
  return (
    <div className="outline-icon">
      <svg viewBox="0 0 130.2 130.2" className="outline-svg">
        <circle
          className="outline-circle"
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          style={{ stroke: color }}
        />
        <polyline
          className="outline-check"
          points="29.8,67.5 51.5,88.8 100.2,40.2"
          fill="none"
          style={{ stroke: color }}
        />
      </svg>
    </div>
  );
};

export const OutlineErrorIcon = ({ color }: { color: string }) => {
  return (
    <div className="outline-icon">
      <svg viewBox="0 0 130.2 130.2" className="outline-svg">
        <circle
          className="outline-circle"
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          style={{ stroke: color }}
        />
        <line
          className="outline-error-line"
          x1="40"
          y1="40"
          x2="90"
          y2="90"
          style={{ stroke: color }}
        />
        <line
          className="outline-error-line"
          x1="90"
          y1="40"
          x2="40"
          y2="90"
          style={{ stroke: color }}
        />
      </svg>
    </div>
  );
};

export const OutlineInfoIcon = ({ color }: { color: string }) => {
  return (
    <div className="outline-icon">
      <svg viewBox="0 0 130.2 130.2" className="outline-svg">
        <circle
          className="outline-circle"
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          style={{ stroke: color }}
        />
        <line
          className="outline-info-line"
          x1="65.1"
          y1="50"
          x2="65.1"
          y2="90"
          style={{ stroke: color }}
        />
        <circle cx="65.1" cy="35" r="4" fill={color} />
      </svg>
    </div>
  );
};

export const OutlineWarningIcon = ({ color }: { color: string }) => {
  return (
    <div className="outline-icon">
      <svg viewBox="0 0 130.2 130.2" className="outline-svg">
        <circle
          className="outline-circle"
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          style={{ stroke: color }}
        />
        <line
          className="outline-warning-line"
          x1="65.1"
          y1="40"
          x2="65.1"
          y2="80"
          style={{ stroke: color }}
        />
        <circle cx="65.1" cy="95" r="4" fill={color} />
      </svg>
    </div>
  );
};

export const OutlineDefaultIcon = ({ color }: { color: string }) => {
  return (
    <div className="outline-icon outline-icon--default">
      <svg viewBox="0 0 130.2 130.2" className="outline-svg">
        <circle
          className="outline-circle"
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          style={{ stroke: color }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="50"
          fontWeight="bold"
          fill={color}
          className="outline-default-question"
        >
          ?
        </text>
      </svg>
    </div>
  );
};
