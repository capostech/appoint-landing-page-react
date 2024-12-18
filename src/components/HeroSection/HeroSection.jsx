import React, { useState } from "react";
import StickyScrollRevealDemo from "../StickyScrollReveal/StickyScrollReveal";

const HeroSection = () => {
  const [showHero, setShowHero] = useState(true); // State to toggle between screens

  const handleButtonClick = () => {
    setShowHero(false); // Set showHero to false to trigger fade-out
  };

  return (
    
        <div className="relative  bg-[#e6fbee] text-[#334155] h-screen flex flex-col items-center justify-center font-serif animate-fadeIn transition-opacity duration-1000">
          {/* Hero Section */}
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-5xl sm:text-6xl tracking-tight text-[#0B8470]">
              Ever Wondered How Easy Healthcare Could Be?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#0B8470]">
              We’re changing the way you connect with Patients.
            </p>
            <div className="mt-10   flex justify-center space-x-4">
              <button
                onClick={handleButtonClick} // Add click handler
                className="rounded-lg bg-[#0b8470] px-5 py-3 text-lg sm:text-xl font-semibold text-[#FFFFFF] shadow-lg hover:bg-[#0b8470] transition"
              >
                Scroll Down
              </button>
            </div>
          </div>
        </div>
      
  );
};

export default HeroSection;
