import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/community_animation_lottie.json";
import Typed from "react-typed";

const Homepage = () => {
  const defaultOptions = {
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
      {/* <Cards/> */}
      <Footer />
    </div>
  );
};

export default Homepage;
