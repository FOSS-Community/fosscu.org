import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-screen-xl h-[18.5rem] mt-[80px] flex flex-col items-center  h-[584px] custom-background justify-center"> 
            <div className="flex w-full justify-end ">
                <div className="font-medium text-xs w-[253px] h-[28px] bg-[#0DFF1C] rounded-tl-[12px] cursor-pointer rounded-tr-[12px] rounded-br-[12px] rounded-bl-[2px] flex justify-center items-center">
                    Wanna open a local chapter at your uni?
                </div>
            </div>
            <div className="text-center font-bold lg:text-6xl text-5xl text-white tracking-tight leading-normal ">
                Welcome to FOSSCU
            </div>
            <div className="text-center text-lg font-semibold text-[#6C7275] leading-[30px] mb-6">
                We are a community of students, developers, designers, and other creative individuals who are passionate about promoting the use and development of Free and Open Source Software.
            </div>
            <div className="flex flex-wrap sm:flex-nowrap  w-full  md:w-full w-[1060px] justify-center items-center gap-4">
                <div className="flex justify-center sm:justify-start w-full">
                    <div className=" bg-[#0DFF1C]  w-48 h-7  flex items-center justify-center font-medium text-xs rounded-tl-[12px] rounded-tr-[2px] rounded-br-[12px] rounded-bl-[12px] ">
                        Are you here from FOSSConf?
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3  sm:absolute">
                        <button className="w-[126px] font-semibold text-lg tracking-tight text-white  h-[48px] rounded-full bg-gradient-to-b from-[#0DFF1C] to-[#006700] cursor-pointer each-in-out transition-transform duration-300 hover:scale-105 hover:text-white/90 ">
                            Join Us
                        </button>
                    <div className="w-[140px]">
                        <button className="w-[158px] font-semibold text-lg tracking-tight text-white h-[48px] rounded-full border cursor-pointer each-in-out duration-500 transition-smooth hover:scale-105 hover:bg-gray hover:text-[#0DFF1C]/80">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
