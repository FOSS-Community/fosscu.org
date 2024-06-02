import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WeInclude from "./WeInclude";
import AboutSection from "./AboutSection";
import WhatWeDo from "./WhatWeDo";
import ComunityStructure from "./ComunityStructure";
import NewsLetter from "./NewsLetter";

function App() {
  return (
    <div className="w-full h-auto bg-[#141718] overflow-x-hidden overflow-y-hidden">
      <Navbar/>
      <HeroSection/>
      <WeInclude/>
      <AboutSection/>
      <WhatWeDo/>
      <ComunityStructure/>
      <NewsLetter/>
    </div>
  );
}

export default App;
