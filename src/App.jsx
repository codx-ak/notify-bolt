import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Features } from "./components/Features";
import SetupSection from "./components/Steps";
import Prism from "prismjs";
import PlaygroundSection from "./components/Playground";
import PerformanceSection from "./components/Performance";
import ThanksSection from "./components/Thanks";

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
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
