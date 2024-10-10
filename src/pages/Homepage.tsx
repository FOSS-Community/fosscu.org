import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Lottie from "react-lottie"; // Ensure @types/react-lottie is installed
import animationData from "../assets/lotties/community_animation_lottie.json";


const Homepage: React.FC = () => {
  const defaultOptions: object = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      {/* Use Lottie animation */}
      <div className="flex justify-center my-8">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      {/* <Cards /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
