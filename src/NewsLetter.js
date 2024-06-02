import React from "react";

const NewsLetter = () => {
  return (
    <div class="flex justify-center">
        <div class="flex justify-between sm:w-[1134px] w-full text-center flex-col lg:flex-row">
            <div class="flex items-center lg:items-start flex-col mb-[20px]">
                <div class="font-bold text-[#FFFFFF] sm:text-2xl text-lg lg:text-4xl md:text-4xl text-center">
                    Want Latest News of OSS World 🌍 ?
                </div>
                <div class="font-light text-[#FFFFFF] lg:text-[28px] md:text-[28px] text-xl text-center">
                    Sign up for our newsletter to stay up to date.
                </div>
            </div>
            <div class="flex justify-center items-center flex-col space-y-[12px]">
                <div class="sm:w-[381px] h-[60px] bg-white/[0.15] rounded-[10px] font-light text-[28px] flex items-center sm:pl-[30px] pl-[20px]">
                    <input type="email" placeholder="Enter Email" class="bg-transparent w-full focus:outline-none placeholder-gray-400" />
                </div>
                <div class="sm:w-[380px] w-[360px] h-[44px] bg-[#0DFF1C] rounded-[10px] font-semibold text-[18px] tracking-tighter text-[#000000] items-center justify-center flex hover:bg-[#0DFF1C]/[0.85] cursor-pointer">
                    Notify me
                </div>
                <div class="sm:w-[411px] w-full sm:h-[46px] font-light text-[#ffffff] text-[16px] flex flex-col text-center justify-center text-center">
                    We care about the protection of your data. Read our 
                    <span class="underline decoration-1 cursor-pointer hover:text-sky-600 transition"> 
                        <a href="">Privacy Policy.</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default NewsLetter;
