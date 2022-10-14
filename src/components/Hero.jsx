import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/community_animation_lottie.json';
import Typed from 'react-typed'

function Hero() {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };



  return (
    <div className='flex justify-center items-center'>
        <Lottie
            options = {defaultOptions}
            height = {500}
            width = {500}
        />
    <div className=' text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold p-2'>Growing With the Community</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a] '>Welcome to FOSSCU</h1>
            <div className='flex justify-center items-center '>
                {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold'>We Do </p> */}
                <Typed
                    className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                    strings={["We do Open-Source 💚", "We do Community Work 🤝", "We do Annual Conferences 🎤", "We Host Events 🎪", "Because That's what heroes Do 🦸‍♂️"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
        </div>
    </div>
    </div>
  );
}

export default Hero

