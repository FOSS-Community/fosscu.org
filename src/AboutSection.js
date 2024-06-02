import React from "react";

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center ">
        <div className="rounded-[40px] bg-white/[0.08] w-full max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl flex items-center text-center justify-center mb-[90px] h-[208px]">
            <div className="w-[1236px] h-[120px] font-bold lg:text-[28px] sm:text-xl text-base flex items-center lg:leading-10 sm:leading-8 text-white text-center ">
                We aim to provide a space for students to develop their skills,  collaborate with like-minded individuals, and contribute to FOSS  projects. The community welcomes anyone who is interested in FOSS,  
                regardless of their background or skill level.
            </div>
        </div>
    </div>
  );
};

export default AboutSection;
