"use client";
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
    <section className="py-8 text-center">
      {/* Title + Subtitle */}
      <h2 className="title text-2xl font-bold text-primary mb-2">
        🚀 Get Started with <code>notify-bolt</code>
      </h2>
      <p className="subtitle text-secondary max-w-2xl mx-auto mb-8">
        Follow these simple steps to install and use{" "}
        <strong>notify-bolt</strong> in your project.
      </p>

      {/* Step 1 */}
      <div className="px-4 py-6 rounded-xl mb-6 text-left shadow-card transition-transform hover:-translate-y-0.5 bg-btn-secondary">
        <h3 className="text-lg font-semibold text-primary mb-3">
          1. Install the package
        </h3>
        <pre className="code-block">
          <code className="language-bash">npm install notify-bolt</code>
        </pre>
      </div>

      {/* Step 2 */}
      <div className="px-4 py-6 rounded-xl mb-6 text-left shadow-card transition-transform hover:-translate-y-0.5 bg-btn-secondary">
        <h3 className="text-lg font-semibold text-primary mb-3">
          2. Import and use
        </h3>
        <pre className="code-block">
          <code className="language-javascript">{`import { showNotify } from 'notify-bolt';

showNotify({
  title: "Delete this item?",
  message: "This action is permanent. Do you wish to proceed?",
  variant: "default",
  themeMode: "light",
  status: "warning",
});`}</code>
        </pre>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex justify-center flex-wrap gap-4">
        <a
          className="btn btn-primary"
          href="https://www.npmjs.com/package/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on npm
        </a>
        <button className="btn btn-secondary" onClick={handleOpen}>
          Try the Demo
        </button>
      </div>
    </section>
  );
};

export default SetupSection;
