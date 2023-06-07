import React from "react";
import frontend from "../assets/img/resources_icons/frontend.svg"
import backend from "../assets/img/resources_icons/backend.svg"
import app from "../assets/img/resources_icons/app.svg"
import aiml from "../assets/img/resources_icons/aiml.svg"
import web3 from "../assets/img/resources_icons/web3.svg"   


const Resource = () => {
    return (
        <div>
            <h1 className="w-full mt-20 mb-24  text-white px-4  tracking-tight  text-center text-5xl">Tech Resources for Developers</h1>

            <div className='flex flex-wrap  mt-26 mb-24 space-x-1 justify-center gap-4 md:gap-4 sm:gap-4'>

                <a href="/frontend" className='w-[280px] h-[285px] my-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <img src={frontend} alt='' className='w-[11.9rem] h-40 ml-6  mt-4 mb-3' />
                    <h2 className='text-center font-bold text-xl mb-0.5'>FRONTEND</h2>
                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>The Complete Guide to Frontend </p>
                </a>

                <a href="/building" className='w-[280px] h-[285px] my-2 flex flex-col shadow-lg shadow-[#00df9a]  transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400  hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <img src={backend} alt='' className='w-40 mx-11 mt-4 mb-3' />
                    <h2 className='text-center font-bold text-xl  mb-0.5'>BACKEND</h2>
                    <p className='flex flex-col text-center text-white  text-md mb-1 px-16'>The Complete Guide to Backend </p>
                </a>

                <a href="/building" className='w-[280px] h-[285px] my-2 flex flex-col shadow-lg  shadow-[#00df9a]  transition-shadow  hover:bg-opacity-90  duration-[320ms]  bg-gray-900  rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <img src={web3} alt='' className='w-32 mt-12 mb-6 mx-auto' />
                    <h2 className='text-center font-bold text-xl mb-0.5'>WEB 3.O</h2>
                    <p className='flex flex-col text-center text-white text-md px-4'>The Complete Guide <br></br> to Web 3.O  </p>
                </a>

                <a href="/building" className='w-[280px] h-[285px] my-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <img src={app} alt='' className='w-36 ml-16 -mb-0 mt-12 ' />
                    <h2 className=' text-center font-bold text-xl mb-0.5'>APP DEVELOPMENT</h2>
                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>The Complete Guide to App Dev </p>
                </a>

                <a href="/building" className='w-[280px] h-[285px] my-2 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow  hover:bg-opacity-90  duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none transition-color hover:text-white transition-color'>
                    <img src={aiml} alt='' className='w-[10.5rem] mx-auto mt-9 -mb-4' />
                    <h2 className='text-center font-bold text-xl mb-0.5'>AI/ML</h2>
                    <p className='flex flex-col text-center text-white text-md px-4'>The Complete Guide <br></br> to  AI/ML </p>
                </a>

            </div>

        </div>
    );
};

export default Resource;