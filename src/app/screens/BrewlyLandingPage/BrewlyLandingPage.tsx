"use client";

import React from "react";
import { FeaturesSection } from "../sections/FeauturSection";
import { HeroSection } from "../sections/HeroSection";
import { NavigationSection } from "../sections/NavigationSeciotn";

export const BrewlyLandingPage = () => {
  return (
    <div className="w-full min-w-0 flex flex-col bg-white overflow-x-hidden" data-model-id="1665:3317">
      <NavigationSection />
    
      <FeaturesSection />
    </div>
  );
};
