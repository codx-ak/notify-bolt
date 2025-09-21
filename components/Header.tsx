"use client";
import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-center pb-[4rem]">
      {/* Logo */}
      <div className="mb-0 animate-slide-in">
        <Image
          src="/fullLogo.png"
          alt="Logo"
          width={600}
          height={250}
          className="w-full h-[250px] transition-all duration-300 object-contain"
          priority
        />
      </div>

      {/* Title + Subtitle */}
      <div className="max-w-[700px] mx-auto my-0 animate-fade-in text-center">
        <h1 className="text-[2.25rem] font-[700] text-primary mb-[0.5rem]">
          Lightning Fast Modals for React ⚡
        </h1>
        <h2 className="text-[1.25rem] font-[500] text-secondary mt-0">
          Beautiful, themeable alerts built for modern apps.
        </h2>

        {/* Buttons */}
        <div className="mt-[2rem] flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.npmjs.com/package/notify-bolt"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Now
          </a>
          <Link href="/docs" className="btn btn-secondary">
            View Docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
