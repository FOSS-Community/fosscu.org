import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/community_animation_lottie.json";
import Typed from "react-typed";

function Hero() {
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
      <div className='absolute z-[0] w-[40%] h-[75%] top-40 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[10%] rounded-full bottom-40 white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[70%] right-20 bottom-20 top-60 blue__gradient' />
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Lottie
          className="w-[500px] mx-auto my-4"
          options={defaultOptions}
          height={400}
          width={400}
        />
        <div className="flex flex-col justify-center">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="font-bold p-4 text-white">
              Growing With the Community
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-8 text-[#00df9a] ">
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
            <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__kzFzfFUNFdWMTVWTjhSU1UyMDZTN0YzSkhMWVE5Vi4u" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#0DFF1C] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Join Us 🤝</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
