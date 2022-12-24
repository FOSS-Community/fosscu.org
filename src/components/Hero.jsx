// import React from "react";
import React, { useState, useEffect } from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lotties/community_animation_lottie.json";
import Typed from "react-typed";

import Discord from '../assets/img/logo/discord.png';
function Hero() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
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
    <div className="w-full py-16 px-5 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {
          size >= 700
            ?

            <Lottie
              className="w-[500px] md:w-[10px] mx-auto my-4"
              options={defaultOptions}
              height={400}
              width={400}
            />
            : ''
        }
        <div className="flex flex-col justify-center">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
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
            <div class="flex items-center justify-center mb-3 mt-6">
              <a href="https://t.me/+5uxiLKV0DHQxNzk9" target="_blank" rel="noopener noreferrer">
                <button type="button" className="inline-block mx-auto py-3 my-0 bg-[#0DFF1C] w-[200px] text-black font-medium  rounded ">Telegram 🤝</button>
              </a>
            </div>
            <div class="flex items-center justify-center mb-3">
              <a href="https://discord.gg/8RQYESyj" target="_blank" rel="noopener noreferrer">
                <button type="button" className="flex items-center justify-center inline-block mx-auto py-3 my-0 bg-[#0DFF1C] w-[200px] text-black font-medium  rounded ">Discord <img className='w-8' src={Discord} /> </button>
              </a>
            </div>
            <div class="flex items-center justify-center mb-3">
              <a href="https://matrix.to/#/!NYOIsHjFcqTHgsBtcj:matrix.org?via=matrix.org" target="_blank" rel="noopener noreferrer">
                <button type="button" className="inline-block mx-auto py-3 my-0 bg-[#0DFF1C] w-[200px] text-black font-medium  rounded ">Matrix 🤝</button>
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;




