import React from "react";
import HeroSection from "./HeroSection";
import CaseStudiesSection from "./CaseStudiesSection";
import DataVisualization from "./DataVisualization";
import GrowthCalculator from "./GrowthCalculator";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <CaseStudiesSection />
      <DataVisualization />
      <GrowthCalculator />
    </div>
  );
}

export default Home;
