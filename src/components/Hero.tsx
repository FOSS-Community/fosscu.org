import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/community_animation_lottie.json";
import Typed from "react-typed";
import logo from "../assets/img/logo/fosscu.png";

const Hero: React.FC = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
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
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-15 justify-center">
        {size >= 700 ? (
         <div className="w-[500px] mx-auto my-4"> {/* Wrap in a div */}
         <Lottie
           options={defaultOptions}
           height={400}
           width={400}
         />
       </div>
        ) : (
          <div className="flex justify-center">
            <img className="w-[200px] md:w-[10px]" src={logo} alt="fosscu" />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
            <p className="font-bold p-4 text-white">Growing With the Community</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-8 text-[#00df9a]">
              Welcome to FOSSCU
            </h1>
            <div className="flex justify-center items-center">
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
            <div className="sm:space-x-4 space-x-0 flex flex-col items-center sm:flex-row sm:justify-center">
              <a
                href="https://dub.sh/fosscu-discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[60px] rounded-md font-medium my-4 py-3 text-black">
                  Join Us 🤝
                </button>
              </a>
              <a
                href="https://docs.fosscu.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[60px] rounded-md font-medium my-4 py-3 text-black">
                  Learn More 🧠
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
