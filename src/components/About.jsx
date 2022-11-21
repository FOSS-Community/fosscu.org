import React from 'react'
import Lottie from 'react-lottie';
import animationDataCommunity from '../assets/lotties/community_about_lottie.json';

function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataCommunity,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <Lottie
                className = 'w-[500px] mx-auto my-4'
                options = {defaultOptions}
                height = {400}
                width = {400}
                />
            <div className='flex flex-col justify-center'>
                <p className='text-[#AEF746] font-bold'>Community + Coding = 🔥</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3'>We ❤️ Open Source</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corporis veniam, vitae delectus ex esse qui blanditiis, commodi facilis dolor praesentium sapiente? Libero ullam quae eaque quaerat nostrum hic ea!</p>
                <a href="https://github.com/FOSS-Community" target="_blank" rel="noopener noreferrer">
                <button className='bg-black text-[#0DFF1C] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started 🏁</button>
                </a>

            </div>
        </div>

    </div>
  )
}

export default About