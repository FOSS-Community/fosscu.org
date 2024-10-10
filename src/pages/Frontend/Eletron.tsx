import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Electron from "../../components/Frontend_files/Electron";
import electronData from "../../data/Front_end/electronjs.json";

interface ElectronData {
  head: string;
  para1: string;
  para2: string;
  para3: string;
  link?: string;
  videoLink?: string;
  image?: string;
}

const Eletron: React.FC = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
        Electron Learning Resources :
      </p>
      <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
      {electronData.map((electronjs: ElectronData, index: number) => (
        <Electron
          key={index}
          head={electronjs.head}
          para1={electronjs.para1}
          para2={electronjs.para2}
          para3={electronjs.para3}
          link={electronjs.link}
          videoLink={electronjs.videoLink}
          image={electronjs.image} // Ensure image is being passed
        />
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Eletron;
