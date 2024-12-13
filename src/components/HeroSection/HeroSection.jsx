import React, { useState } from "react";

const HeroSection = () => {
  const [showHero, setShowHero] = useState(true); // State to toggle between screens

  const handleButtonClick = () => {
    setShowHero(false); // Set showHero to false to trigger fade-out
  };

  return (
    <div>
      {showHero ? (
        <div className="relative bg-[#e6fbee] text-[#334155] h-screen flex flex-col items-center justify-center font-serif animate-fadeIn transition-opacity duration-1000">
          {/* Hero Section */}
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-5xl sm:text-6xl tracking-tight text-[#0B8470]">
              Ever Wondered How Easy Healthcare Could Be?
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#0B8470]">
              We’re changing the way you connect with Doctors.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={handleButtonClick} // Add click handler
                className="rounded-md bg-[#0b8470] px-5 py-3 text-sm font-semibold text-[#FFFFFF] shadow-lg hover:bg-[#0b8470] transition"
              >
                Ready to find out how?
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#f5f5f5] text-[#334155] h-screen flex flex-col items-center justify-center font-serif animate-fadeIn transition-all duration-1000">
          {/* Next Screen */}
          <h1 className="text-4xl text-[#0B8470]">Welcome to the Next Screen!</h1>
          <p className="mt-4 text-lg text-[#0B8470]">
            Here’s what you can do next.
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
