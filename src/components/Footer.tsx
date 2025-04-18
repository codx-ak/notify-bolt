import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/codx-ak/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="#docs">Docs</a>
        <a
          href="https://www.linkedin.com/in/ak-moorthi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="footer-meta">
        <span>© {new Date().getFullYear()} notify-bolt</span>
        {" · "}
        <span>
          Built by{" "}
          <a
            href="https://github.com/codx-ak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ak Moorthi
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
