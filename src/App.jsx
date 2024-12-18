import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import StickyScrollRevealDemo from "./components/StickyScrollReveal/StickyScrollReveal";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import ConversationSection from "./components/ConversationSection/ConversationSection";

const App=()=>{
  return (
    <div>
      <HeroSection/>
      <StickyScrollRevealDemo/>
      <ConversationSection/>
      
      
    </div>
  );
};
export default App;