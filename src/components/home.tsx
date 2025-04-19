import React from "react";
import HeroSection from "./HeroSection";
import CaseStudiesSection from "./CaseStudiesSection";
import DataVisualization from "./DataVisualization";
import GrowthCalculator from "./GrowthCalculator";
import ServicesSection from "./ServicesSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <DataVisualization />
      <GrowthCalculator />
      <Footer />
    </div>
  );
}

export default Home;
