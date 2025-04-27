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
    themeMode: "light",
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
    <section className="py-[2rem]">
      <h2 className="title">🧪 Playground</h2>
      <p className="subtitle">
        Experiment with different settings to preview the notification modal in
        real time.
      </p>

      {/* Status Section */}
      <div className="flex flex-wrap gap-8 mb-[2.5rem] items-start pb-[2rem]">
        <div className="max-w-[450px]">
          <h6>📦 Variant</h6>
          <div className="btn-group">
            {["classic", "minimal", "default"].map((type) => (
              <button
                key={type}
                className={`btn btn-secondary ${
                  options.variant === type ? "active" : ""
                }`}
                onClick={() => {
                  setOptions({
                    ...options,
                    variant: type,
                    showCloseIcon: type === "classic",
                  });
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <h6>📂 Icon Type</h6>
          <div className="btn-group">
            {["classic", "outline"].map((type) => (
              <button
                key={type}
                className={`btn btn-secondary ${
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

          <h6>🎨 Status</h6>
          <div className="btn-group">
            {["success", "error", "info", "warning", "default"].map((type) => (
              <button
                key={type}
                className={`btn btn-secondary ${
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

          <h6>⚙️ Size</h6>
          <div className="btn-group">
            {["xs", "sm", "md", "lg"].map((type) => (
              <button
                key={type}
                className={`btn btn-secondary ${
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

          <h6>💫 Modal Animation</h6>
          <div className="btn-group">
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
                className={`btn btn-secondary ${
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

          <h6>🎉 Celebrate Animation</h6>
          <div className="btn-group">
            <button
              className={`btn btn-secondary ${
                options.celebrate != true ? "active" : ""
              }`}
              onClick={() => {
                setOptions({
                  ...options,
                  celebrate: !options.celebrate,
                  celebrationType: "None",
                });
              }}
            >
              None
            </button>
            {["basic", "random", "realistic", "fireworks", "snow", "pride"].map(
              (type) => (
                <button
                  key={type}
                  className={`btn btn-secondary ${
                    options.celebrationType === type ? "active" : ""
                  }`}
                  onClick={() => {
                    setOptions({
                      ...options,
                      celebrate: true,
                      celebrationType: type,
                    });
                  }}
                >
                  {type}
                </button>
              )
            )}
          </div>

          <h6>⚙️ Buttons</h6>
          <div className="btn-group" style={{ gap: "20px" }}>
            <div className="btn-group">
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
            <div className="btn-group">
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
            <div className="btn-group">
              <label className="switch-label">
                <span>Close Icon</span>
                <input
                  type="checkbox"
                  checked={options.showCloseIcon}
                  onChange={() =>
                    setOptions({
                      ...options,
                      showCloseIcon: !options.showCloseIcon,
                    })
                  }
                />
                <span className="switch-slider"></span>
              </label>
            </div>
            <div className="btn-group">
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
            <div className="btn-group">
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
          </div>

          <h6>⏱️ Timer</h6>
          <div className="btn-group" style={{ gap: "20px" }}>
            <div className="btn-group">
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
            <div className="btn-group">
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

        <div className="bg-[#f8f9fa] rounder-[8px] p-[1rem] text-[0.9rem] overflow-x-auto place-self-center flex-1">
          <div className="flex justify-between items-center mb-[1rem]">
            <h4 className="font-[600] my-[1rem]">📌 Example Code</h4>

            <div className="btn-group">
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
          <pre className="code-block">
            <code className="language-javascript">{`
  showNotify({
    title: "${options.title}",
    message: "${options.message}",
    variant: "${options.variant}",
    themeMode: "${options.themeMode}",
    status: "${options.status}",
    allowOutsideClick: ${options.allowOutsideClick},
    animation: "${options.animation}",
    size: "${options.size}",
    showCancelIcon: ${options.showCloseIcon},
    showDenyButton: ${options.showDenyButton},
    showCancelButton: ${options.showCancelButton},
    showConfirmButton: ${options.showConfirmButton},
    timer: ${options.timer},
    timerProgressBar: ${options.timerProgressBar},
    focusConfirm: ${options.focusConfirm},
    celebrate: ${options.celebrate},
    ${
      options.celebrate ? `"celebrationType": "${options.celebrationType}"` : ""
    }
  })
`}</code>
          </pre>
          <div className="text-center mt-[2rem]">
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
