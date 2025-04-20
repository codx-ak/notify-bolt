import React, { useEffect, useState } from "react";
import { showNotify, NotifyProps } from "notify-bolt";
import Prism from "prismjs";

const PlaygroundSection = () => {
  const [options, setOptions] = useState({
    title: "Testing",
    message: "This is a test message!",
    allowOutsideClick: true,
    animation: "slide-up",
    size: "sm",
    showCancelIcon: true,
    status: "success",
    themeMode: "light",
    variant: "classic",
    iconType: "classic",
    showDenyButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    timer: 0,
    timerProgressBar: false,
    focusConfirm: true,
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
            {["classic", "minimal", "default"].map((type) => (
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

          <h3>📂 Icon Type</h3>
          <div className="button-group">
            {["classic", "outline"].map((type) => (
              <button
                key={type}
                className={`option-btn ${
                  options.iconType === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({
                    ...options,
                    iconType: type,
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

          <h3>⚙️ Size</h3>
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

          <h3>⚙️ Buttons</h3>
          <div className="button-group" style={{ gap: "20px" }}>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Confirm Button</span>
                <input
                  type="checkbox"
                  checked={options.showConfirmButton}
                  onChange={() =>
                    setOptions({
                      ...options,
                      showConfirmButton: !options.showConfirmButton,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Deny Button</span>
                <input
                  type="checkbox"
                  checked={options.showDenyButton}
                  onChange={() =>
                    setOptions({
                      ...options,
                      showDenyButton: !options.showDenyButton,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Close Icon</span>
                <input
                  type="checkbox"
                  checked={options.showCancelIcon}
                  onChange={() =>
                    setOptions({
                      ...options,
                      showCancelIcon: !options.showCancelIcon,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Cancel Button</span>
                <input
                  type="checkbox"
                  checked={options.showCancelButton}
                  onChange={() =>
                    setOptions({
                      ...options,
                      showCancelButton: !options.showCancelButton,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Focus Confirm Button</span>
                <input
                  type="checkbox"
                  checked={options.focusConfirm}
                  onChange={() =>
                    setOptions({
                      ...options,
                      focusConfirm: !options.focusConfirm,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Timer (5000ms)</span>
                <input
                  type="checkbox"
                  checked={options.timer ? true : false}
                  onChange={() =>
                    setOptions({
                      ...options,
                      timer: options.timer ? 0 : 5000,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="toggle-group">
              <label className="switch-label">
                <span>Timer Progress Bar</span>
                <input
                  type="checkbox"
                  checked={options.timerProgressBar}
                  onChange={() =>
                    setOptions({
                      ...options,
                      timerProgressBar: !options.timerProgressBar,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="playground-code">
          <div className="code-container">
            <h4>📌 Example Code</h4>

            <div className="toggle-group">
              <label className="switch-label">
                <span>Mode </span>
                <input
                  type="checkbox"
                  checked={options.themeMode === "dark"}
                  onChange={() =>
                    setOptions({
                      ...options,
                      themeMode:
                        options.themeMode === "light" ? "dark" : "light",
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
          </div>
          <pre className="code-block" style={{ textAlign: "start" }}>
            <code className="language-javascript">{`
  showNotify({
    title: ${options.title},
    message: ${options.message},
    variant: ${options.variant},
    themeMode: ${options.themeMode},
    status: ${options.status},
    allowOutsideClick: ${options.allowOutsideClick},
    animation: ${options.animation},
    size: ${options.size},
    showCancelIcon: ${options.showCancelIcon},
    showDenyButton: ${options.showDenyButton},
    showCancelButton: ${options.showCancelButton},
    showConfirmButton: ${options.showConfirmButton},
    timerProgressBar: ${options.timerProgressBar},
    focusConfirm: ${options.focusConfirm},
    ${options.timer ? `timer: ${options.timer},` : ""}
  })
`}</code>
          </pre>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="btn primary"
              onClick={() => showNotify(options as NotifyProps)}
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
