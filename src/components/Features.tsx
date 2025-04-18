import React from "react";
const features = [
  "Promise-Based Alerts",
  "Multiple Modal Variants",
  "Built-in Animations",
  "Custom Modal Sizes",
  "Light & Dark Theme Support",
  "Custom Button Text & Icons",
  "Outside Click Dismiss",
  "Fully Customizable Styles",
  "Optional Cancel Icon Support",
  "Flexible Status Types",
  "Global Configuration Support",
  "Support for Emoji & Rich Text",
  "Easy Integration ",
  "Zero Dependencies",
  "Headless Hook Support",
];

export const Features = () => (
  <section className="features-section">
    <h2 className="features-heading">
      What Makes <span className="highlight">notify-bolt</span> Stand Out?
    </h2>
    <div className="features-grid">
      {features.map((feature, index) => (
        <FeatureItem key={index}>{feature}</FeatureItem>
      ))}
    </div>
  </section>
);

const FeatureItem = ({ children }) => (
  <div className="feature-item">
    <span className="feature-icon">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#12b76a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <span className="feature-text">{children}</span>
  </div>
);
