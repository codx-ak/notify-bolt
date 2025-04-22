import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Features } from "./components/Features";
import SetupSection from "./components/Steps";
import Prism from "prismjs";
import PlaygroundSection from "./components/Playground";
import PerformanceSection from "./components/Performance";
import ThanksSection from "./components/Thanks";
import { showNotify } from "notify-bolt";

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
    <div className="app">
      <Header />
      <Features />
      <SetupSection />
      <PlaygroundSection />
      <PerformanceSection />
      <ThanksSection />
      <Footer />
    </div>
  );
};

export default App;
