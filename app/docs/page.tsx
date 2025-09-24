"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import Image from "next/image";
import { propsList } from "./propsList";
import Link from "next/link";

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <pre className="code-block">
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

const Docs = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link href="/" style={{ width: 150, height: 150 }}>
          <Image
            src="https://codx-ak.github.io/notify-bolt/fullLogo.png"
            alt="Notify Bolt Logo"
            width={150}
            height={150}
            priority
          />
        </Link>
        <a
          className="text-secondary underline"
          href="https://github.com/codx-ak/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Getting Started */}
      <div className="pt-8 title">Getting Started</div>
      <div className="subtitle">
        Easily add stunning, customizable modals and notifications to your React
        application using{" "}
        <a
          className="text-secondary underline"
          href="https://www.npmjs.com/package/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          notify-bolt
        </a>
        .
      </div>

      {/* Install Section */}
      <section className="mt-12">
        <h5>Install with NPM</h5>
        <CodeBlock code={`npm install notify-bolt`} />
        <h5>Install with Yarn</h5>
        <CodeBlock code={`yarn add notify-bolt`} />
      </section>

      {/* Basic Usage */}
      <section className="mt-12">
        <h5>Basic usage</h5>
        <CodeBlock
          code={`import { showNotify } from "notify-bolt";

const handleClick = () => {
  showNotify({
    title: "Delete this item?",
    message: "This action is permanent. Do you wish to proceed?",
    variant: "classic",
    status: "warning",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(() => {
      // User confirmed
    })
    .catch(() => {
      // User dismissed
    });
};`}
        />
      </section>

      {/* Props List */}
      <section className="mt-16 text-left">
        <div className="title">Notify Options</div>
        <div className="subtitle">
          Explore a wide range of customizable options to control the
          appearance, behavior, and animations of your notifications. Tailor
          every detail to match your app’s design and deliver the perfect user
          experience.
        </div>

        {propsList.map((prop, index) => (
          <div key={index} className="mb-16">
            <h5>
              {index + 1}. {prop.name}
            </h5>
            <p className="subtitle text-sm mb-3">{prop.description}</p>
            <p className="subtitle text-sm mb-5 flex flex-wrap items-center gap-1">
              Accepted Types:
              {prop.types.map((item, idx) => (
                <span key={idx}>
                  <code className="bg-secondary/40 mx-1 text-xs font-medium text-primary px-1.5 py-1 rounded">
                    {item}
                  </code>
                  {prop.types.length - 1 > idx ? "," : "."}
                </span>
              ))}
            </p>
            <h6>Examples:</h6>
            {prop.examples.map((example, idx) => (
              <div className="mb-4" key={idx}>
                <CodeBlock code={example} />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Global Defaults */}
      <section className="mt-16 text-left">
        <div className="title">Global Defaults Example</div>
        <div className="subtitle">
          Set global default configurations to customize the behavior and
          appearance of all notifications across your app. This helps maintain
          consistency without having to manually pass options every time you
          call{" "}
          <code className="bg-secondary/40 mx-1 text-[0.8rem] font-[500] text-primary px-1.5 py-1 rounded-[5px]">
            showNotify
          </code>
          .
        </div>

        <CodeBlock
          code={`import { setNotifyDefaults } from "notify-bolt";

setNotifyDefaults({
  mode: "light",
  defaultSize: "sm",
  allowOutsideClick: true,
  style: {},
});`}
        />
      </section>
    </div>
  );
};

export default Docs;
