"use client";
import FeaturesSection from "@/components/Features";
import HeaderSection from "@/components/Header";
import PerformanceSection from "@/components/Performance";
import PlaygroundSection from "@/components/Playground";
import SetupSection from "@/components/Setup";
import { showNotify } from "notify-bolt";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      showNotify({
        title: "Welcome!",
        message: "We're glad to have you here. Enjoy exploring Notify Bolt!",
        allowOutsideClick: true,
        animation: "zoom-in",
        celebrate: true,
        celebrationType: "pride",
        showCancelButton: false,
        size: "sm",
        status: "success",
        variant: "default",
        iconType: "classic",
        timer: 5000,
      });
    }, 1000);
  }, []);
  return (
    <>
      {/* header  */}
      <HeaderSection />

      {/* Features section  */}
      <FeaturesSection />

      {/* package setup section  */}
      <SetupSection />

      {/* package playground  */}
      <PlaygroundSection />

      {/* package performance section  */}
      <PerformanceSection />

      {/* thanks section  */}
      <section className="text-center mt-[5rem]">
        <div className="container">
          <h3 className="text-[20px] text-primary mb-[6px] text-center w-[100%] font-[600]">
            🎉 Thanks for Checking Out Notify-Bolt!
          </h3>
          <p className="text-[0.8rem] text-subtitle text-center">
            We appreciate your time. Hope `notify-bolt` helps you make your
            notifications smoother and more efficient.
          </p>
        </div>
      </section>
    </>
  );
}
