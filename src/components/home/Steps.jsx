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
    <section className="py-[2rem]">
      <h2 className="title">
        🚀 Get Started with <code>notify-bolt</code>
      </h2>
      <p className="subtitle">
        Follow these simple steps to install and use{" "}
        <strong>notify-bolt</strong> in your project.
      </p>

      <div className="px-[1rem] py-[1.5rem] rounded-[12px] mb-[2rem] text-left shadow-card transition-transform hover:translate-y-[-2px] bg-btn-secondary">
        <h3 className="text-[1rem] font-[600] text-primary mb-[0.75rem] mt-0">
          1. Install the package
        </h3>
        <pre className="code-block">
          <code className="language-bash">npm install notify-bolt</code>
        </pre>
      </div>

      <div className="px-[1rem] py-[1.5rem] rounded-[12px] mb-[2rem] text-left shadow-card transition-transform hover:translate-y-[-2px] bg-btn-secondary">
        <h3 className="text-[1rem] font-[600] text-primary mb-[0.75rem] mt-0">
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
  })
`}</code>
        </pre>
      </div>

      <div className="mt-[2rem] flex justify-center flex-wrap gap-4">
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
