import React, { useEffect, useState } from "react";
import { showNotifyModal, NotifyModalProps } from "notify-bolt";
import Prism from "prismjs";

const PlaygroundSection = () => {
  const [options, setOptions] = useState<Partial<NotifyModalProps>>({
    title: "Testing",
    message: "This is a test message!",
    allowOutsideClick: true,
    animation: "slide-up",
    size: "sm",
    showCancelIcon: true,
    status: "success",
    themeMode: "light",
    variant: "classic",
  });

  useEffect(() => {
    Prism.highlightAll();
  }, [options]);
  return (
    <section className="playground-section">
      <h2 className="playground-heading">🧪 Playground</h2>
      <p className="playground-subtitle">
        Experiment with different settings to preview the notification modal in
        real time.
      </p>

      {/* Status Section */}
      <div className="playground-row">
        <div className="playground-options">
          <h3>📦 Variant</h3>
          <div className="button-group">
            {["classic", "default"].map((type) => (
              <button
                key={type}
                className={`option-btn ${
                  options.variant === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({
                    ...options,
                    variant: type,
                    showCancelIcon: type === "classic",
                  });
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <h3>🎨 Status</h3>
          <div className="button-group">
            {["success", "error", "info", "warning", "default"].map((type) => (
              <button
                key={type}
                className={`option-btn ${
                  options.status === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({ ...options, status: type });
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <h3>📐 Size</h3>
          <div className="button-group">
            {["xs", "sm", "md", "lg"].map((type) => (
              <button
                key={type}
                className={`option-btn ${
                  options.size === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({ ...options, size: type });
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <h3>🌓 Theme Mode</h3>
          <div className="toggle-group">
            <label className="switch-label">
              <span>light </span>
              <input
                type="checkbox"
                checked={options.themeMode === "dark"}
                onChange={() =>
                  setOptions({
                    ...options,
                    themeMode: options.themeMode === "light" ? "dark" : "light",
                  })
                }
              />
              <span className="switch-slider"></span>
              <span>dark </span>
            </label>
          </div>

          <h3>⭐ Animation</h3>
          <div className="button-group">
            {[
              "slide-up",
              "slide-down",
              "slide-left",
              "slide-right",
              "fade",
              "zoom-in",
              "zoom-out",
            ].map((type) => (
              <button
                key={type}
                className={`option-btn ${
                  options.animation === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({ ...options, animation: type });
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="playground-code">
            <h4>📌 Example Code</h4>
            <pre className="code-block" style={{ textAlign: "start" }}>
              <code className="language-javascript">{`
  showNotifyModal({
    title: ${options.title},
    message: ${options.message},
    variant: ${options.variant},
    themeMode: ${options.themeMode},
    status: ${options.status},
    allowOutsideClick: ${options.allowOutsideClick},
    animation: ${options.animation},
    size: ${options.size},
    showCancelIcon: ${options.showCancelIcon},
  })
`}</code>
            </pre>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button
                className="btn primary"
                onClick={() => showNotifyModal(options)}
              >
                Preview Modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
