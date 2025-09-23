"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-[3rem] pb-[2rem] text-[0.95rem] text-secondary">
      <div className="mb-4">
        <a
          className="mx-[12px] my-0 text-primary underline font-[500]"
          href="https://github.com/codx-ak/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Link
          className="mx-[12px] my-0 text-primary underline font-[500] cursor-pointer"
          href="/"
        >
          Playground
        </Link>
        <Link
          className="mx-[12px] my-0 text-primary underline font-[500] cursor-pointer"
          href="/docs"
        >
          Docs
        </Link>
        <a
          className="mx-[12px] my-0 text-primary underline font-[500]"
          href="https://www.linkedin.com/in/ak-moorthi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div>
        <span>© {new Date().getFullYear()} notify-bolt</span>
        {" · "}
        <span>
          Built by{" "}
          <a
            className="text-secondary underline"
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
