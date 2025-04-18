import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./fullLogo.png" alt="Logo" />
      </div>

      <div className="header-text">
        <h1 className="header-title">Lightning Fast Modals for React ⚡</h1>
        <h2 className="header-subtitle">
          Beautiful, themeable alerts built for modern apps.
        </h2>
        <div className="header-actions">
          <a
            href="https://www.npmjs.com/package/notify-bolt"
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Now
          </a>
          <a href="/docs" className="btn secondary">
            View Docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
