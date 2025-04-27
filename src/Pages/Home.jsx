import React from "react";
import HeaderSection from "../components/home/Header";
import FeaturesSection from "../components/home/Features";
import SetupSection from "../components/home/Steps";
import PlaygroundSection from "../components/home/Playground";
import PerformanceSection from "../components/home/Performance";
import ThanksSection from "../components/common/Thanks";

const HomePage = ({ goToDocs }) => {
  return (
    <>
      <HeaderSection goToDocs={goToDocs} />
      <FeaturesSection />
      <SetupSection />
      <PlaygroundSection />
      <PerformanceSection />
      <ThanksSection />
    </>
  );
};

export default HomePage;
