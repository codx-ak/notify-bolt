"use client";
import React, { useEffect, useState } from "react";
import { showNotify } from "notify-bolt";
import Prism from "prismjs";

const PlaygroundSection = () => {
  const [options, setOptions] = useState({
    title: "Testing",
    message: "This is a test message!",
    allowOutsideClick: true,
    animation: "slide-up",
    size: "sm",
    showCloseIcon: true,
    status: "success",
    mode: "light",
    variant: "classic",
    iconType: "classic",
    showDenyButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    timer: 0,
    timerProgressBar: false,
    focusConfirm: true,
    celebrate: true,
    celebrationType: "pride",
  });

  useEffect(() => {
    Prism.highlightAll();
  }, [options]);

  return (
    <section className="py-8">
      <h2 className="title">🧪 Playground</h2>
      <p className="subtitle">
        Experiment with different settings to preview the notification modal in
        real time.
      </p>

      <div className="flex flex-wrap gap-8 mb-10 items-start pb-8">
        {/* Controls */}
        <div className="max-w-[450px]">
          {/* Example: Variant */}
          <h6>📦 Variant</h6>
          <div className="btn-group">
            {["classic", "minimal", "default"].map((type) => (
              <button
                key={type}
                className={`btn btn-secondary ${
                  options.variant === type ? "active" : ""
                }`}
                onClick={() =>
                  setOptions({
                    ...options,
                    variant: type,
                    showCloseIcon: type === "classic",
                  })
                }
              >
                {type}
              </button>
            ))}
          </div>

          {/* ... other sections stay the same (status, size, animation, etc.) */}
        </div>

        {/* Preview Code + Run Button */}
        <div className="bg-[#f8f9fa] rounded-lg p-4 text-sm overflow-x-auto place-self-center flex-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold my-2">📌 Example Code</h4>

            {/* Theme toggle */}
            <div className="btn-group">
              <label className="switch-label">
                <span>Mode </span>
                <input
                  type="checkbox"
                  checked={options.mode === "dark"}
                  onChange={() =>
                    setOptions({
                      ...options,
                      mode: options.mode === "light" ? "dark" : "light",
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
          </div>

          <pre className="code-block">
            <code className="language-javascript">{`
showNotify({
  title: "${options.title}",
  message: "${options.message}",
  variant: "${options.variant}",
  mode: "${options.mode}",
  status: "${options.status}",
  allowOutsideClick: ${options.allowOutsideClick},
  animation: "${options.animation}",
  size: "${options.size}",
  showCloseIcon: ${options.showCloseIcon},
  showDenyButton: ${options.showDenyButton},
  showCancelButton: ${options.showCancelButton},
  showConfirmButton: ${options.showConfirmButton},
  timer: ${options.timer},
  timerProgressBar: ${options.timerProgressBar},
  focusConfirm: ${options.focusConfirm},
  celebrate: ${options.celebrate},
  ${options.celebrate ? `"celebrationType": "${options.celebrationType}"` : ""}
})`}</code>
          </pre>

          <div className="text-center mt-6">
            <button
              className="btn btn-primary"
              onClick={() => showNotify(options)}
            >
              Preview Modal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
