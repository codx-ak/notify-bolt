import React from "react";
import { showNotify } from "notify-bolt";

const SetupSection = () => {
  const handleOpen = () => {
    showNotify({
      title: "Delete this item?",
      message: "This action is permanent. Do you wish to proceed?",
      variant: "default",
      themeMode: "light",
      status: "warning",
    });
  };
  return (
    <section className="setup-section">
      <h2 className="setup-heading">
        🚀 Get Started with <code>notify-bolt</code>
      </h2>
      <p className="setup-subtitle">
        Follow these simple steps to install and use{" "}
        <strong>notify-bolt</strong> in your project.
      </p>

      <div className="setup-step">
        <h3 className="step-title">1. Install the package</h3>
        <pre className="code-block">
          <code className="language-bash">npm install notify-bolt</code>
        </pre>
      </div>

      <div className="setup-step">
        <h3 className="step-title">2. Import and use</h3>
        <pre className="code-block">
          <code className="language-javascript">{`import { showNotify } from 'notify-bolt';

showNotify({
    title: "Delete this item?",
    message: "This action is permanent. Do you wish to proceed?",
    variant: "default",
    themeMode: "light",
    status: "warning",
  })
`}</code>
        </pre>
      </div>

      <div className="setup-cta">
        <a
          className="btn primary"
          href="https://www.npmjs.com/package/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on npm
        </a>
        <button className="btn secondary" onClick={handleOpen}>
          Try the Demo
        </button>
      </div>
    </section>
  );
};

export default SetupSection;
