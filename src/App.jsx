import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import StickyScrollRevealDemo from "./components/StickyScrollReveal/StickyScrollReveal";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import ConversationSection from "./components/ConversationSection/ConversationSection";
import Footer from "./components/FooterSection/FooterSection";

const App=()=>{
  return (
    <div>
      <HeroSection/>
      <StickyScrollRevealDemo/>
      <ConversationSection/>
      <Footer/>
      
      
    </div>
  );
};
export default App;