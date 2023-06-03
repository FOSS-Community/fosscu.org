import React, { useState, useEffect } from "react";
import arrow from "../assets/img/frontend_icons/icons-arrow.png"
import downarrow from "../assets/img/frontend_icons/down_arrow.png"


const Frontend = () => {
    return (
        <div>
            <h1 className="w-full mt-20 mb-24  text-white px-4  tracking-tight  text-center text-5xl">Complete Frontend Roadmap</h1>

            < div className='flex flex-wrap mx-40 mt-26 mb-20 justify-center gap-4 md:gap-4 sm:gap-4'>

                <a href="/html_css" className=' sm:mb-10 px-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>HTML/ CSS</h2>
                </a>
                <img src={arrow} className="w-0 h-0  max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className=" w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/tailwind" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>TAILWIND CSS</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/javascript" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>JAVA SCRIPT</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-15 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/reactjs" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>REACT JS</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/nextjs" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>NEXT JS</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/vuejs" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>VUE JS</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/threejs" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>THREE JS</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/reactnative" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>REACT NATIVE</h2>
                </a>
                <img src={arrow} className="w-0 h-0 max-w-screen-xl sm:w-20 sm:h-20"/>
                <img src={downarrow} className="w-20 h-20 max-w-screen-xl sm:w-0 sm:h-0"/>
                <a href="/electron" className='sm:mb-10 pl-2 pr-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <h2 className='text-center font-bold text-3xl px-4 py-6'>ELECTRON</h2>
                </a>

            </div>

        </div>
    );
};

export default Frontend;