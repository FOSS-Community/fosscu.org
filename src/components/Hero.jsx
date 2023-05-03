import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/community_animation_lottie.json";
import Typed from "react-typed";
import logo from "../assets/img/logo/fosscu.png";
function Hero() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full py-16 px-5">
      <div className="min-h-0">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        {size >= 700 ? (
          <div className="flex items-center justify-center h-full">
          <Lottie
            className="w-[500px] md:w-[10px] mx-auto my-4"
            options={defaultOptions}
            height={460}
            width={460}
          />
          </div>
        ) : (
          <div className="flex justify-center">
            <img className="w-[200px] md:w-[10px]  " src={logo} alt="foccu" />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
            <p className="font-bold p-4 text-white">
              Growing With the Community
            </p>
            <h1 className="md:text-7xl  sm:text-6xl text-4xl font-bold md:py-8 text-[#00df9a] ">
              Welcome to FOSSCU
            </h1>
            <div className="flex justify-center items-center ">
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-white grow"
                strings={[
                  "We do Open-Source 💚",
                  "We do Community Work 🤝",
                  "We do Annual Conferences 🎤",
                  "We Host Events 🎪",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <div class="sm:space-x-4 space-x-0 flex flex-col items-center sm:flex-row sm:justify-center">
              <button className="bg-[#0dff1c] w-[190px] h-[60px]  rounded-md font-medium my-4 py-3 text-black">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXC6WhL-tIYUXqeqsJM4Dmp3SzW3HDTw0Em06aV2zll_QcrA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Us 🤝
                </a>
              </button>
              <button className="bg-[#0dff1c] w-[190px] h-[60px] rounded-md font-medium my-4 py-3 text-black">
                <a
                  href="https://cal.com/fosscu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Doubt Clarification ⏱️
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
