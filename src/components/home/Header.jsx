import React from "react";
import FullLogo from "../../assets/fullLogo.png";

const HeaderSection = ({ goToDocs }) => {
  return (
    <div className="flex flex-col items-center pb-[4rem]">
      <div className="mb-0 animate-slide-in">
        <img
          className="w-[100%] h-[250px] transition-all duration-300"
          src={FullLogo}
          alt="Logo"
        />
      </div>

      <div className="max-w-[700px] mx-auto my-0 animate-fade-in">
        <h1 className="text-[2.25rem] font-[700] text-primary mb-[0.5rem]">
          Lightning Fast Modals for React ⚡
        </h1>
        <h2 className="text-[1.25rem] font-[500] text-secondary mt-0">
          Beautiful, themeable alerts built for modern apps.
        </h2>

        <div className="mt-[2rem] flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.npmjs.com/package/notify-bolt"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Now
          </a>
          <button onClick={goToDocs} className="btn btn-secondary">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
