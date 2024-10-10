import React, { useState, useEffect } from "react";
import Lottie from "react-lottie"; // or from "react-lottie-player" if you're using that
import animationData from "../assets/lotties/community_about_lottie.json";

const About: React.FC = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  const checkSize = (): void => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
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
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {size >= 700 ? (
          <div className="w-[500px] mx-auto my-4"> {/* Wrap in a div */}
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col justify-center">
          <p className="text-[#AEF746] font-bold">Community + Coding = 🔥</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
            We ❤️ Open Source
          </h1>
          <p>
            We at FOSSCU (Free and Open-Source Software Community United) are
            a group of individuals who are constantly working to promote
            Open-Source Culture.
          </p>
          <a
            href="https://linktr.ee/fosscu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:bg-slate-800 bg-black text-[#0DFF1C] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Connect with Us 🏁
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
