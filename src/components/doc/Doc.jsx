import React, { useEffect } from "react";
import Prism from "prismjs";
import { propsList } from "./propsList";
import Logo from "../../assets/fullLogo.png";

const CodeBlock = ({ code }) => {
  return (
    <pre className="code-block">
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

const DocSection = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <img className="w-[150px] h-[150px]" src={Logo} />
        <a
          className="text-secondary underline"
          href="https://github.com/codx-ak/notify-bolt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className="pt-[2rem] title">Getting Started</div>
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

      <section className="mt-[3rem]">
        <h5>Install with NPM</h5>
        <CodeBlock code={`npm install notify-bolt`} />
        <h5>Install with Yarn</h5>

        <CodeBlock code={`yarn add notify-bolt`} />
      </section>

      <section className="mt-[3rem]">
        <h5>Basic usage</h5>
        <CodeBlock
          code={`import { showNotify } from "notify-bolt";

const handleClick = () => {
  showNotify({
    title: "Delete this item?",
    message: "This action is permanent. Do you wish to proceed?",
    variant: "classic",
    themeMode: "dark",
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

      <section className="mt-[4rem]">
        <div className="title">Notify Options</div>
        <div className="subtitle">
          Explore a wide range of customizable options to control the
          appearance, behavior, and animations of your notifications. Tailor
          every detail to match your app’s design and deliver the perfect user
          experience.
        </div>

        {propsList.map((prop, index) => (
          <div key={index} className="mb-[4rem]">
            <h5>
              {index + 1}. {prop.name}
            </h5>
            <p className="subtitle text-[0.9rem] text-start mb-3">
              {prop.description}
            </p>
            <p className="subtitle text-[0.9rem] text-start mt-0 mb-5">
              Accepted Types:
              {prop.types.map((item, index) => (
                <>
                  <code className="bg-secondary/40 mx-1 text-[0.8rem] font-[500] text-primary px-1.5 py-1 rounded-[5px]">
                    {item}
                  </code>
                  {prop.types.length - 1 > index ? "," : "."}
                </>
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

      <section className="mt-[4rem]">
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
  themeMode: "light",
  defaultSize: "sm",
  allowOutsideClick: true,
  style: {},
});`}
        />
      </section>
    </div>
  );
};

export default DocSection;
