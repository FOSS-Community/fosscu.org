import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FOSSCU from "../assets/img/logo/fosscu.png"

 const AboutOrg = () => {
  return (
    <div>
      <Navbar/>
    <div class="text-[#ffffff] body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <div class="flex flex-row mx-auto">
        <img className='w-[30px] sm:w-[65px] ' src={FOSSCU} alt="/" />     
        <h2 class=" text-lg sm:text-3xl  text-[#00FF00] tracking-widest font title-font mb-1 sm:ml-5 sm:mt-4 ml-2 mt-2 " >ABOUT FOSSCU-KIET</h2>
      </div>
        <p class="lg:w-2/3 mx-auto mt-7 leading-relaxed ">We at FOSSCU (Free and Open-Source Community United )  are a Group of individuals who are constantly working to promote Open-Source Culture. </p>
        <p class="mt-8 text-[#1AFF1A]">Some key points about our community.</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Open to all</h2>
          <p class="leading-relaxed text-base mb-4">We are a community, not a club. Anyone who is eager to start using or contributing to open source software or who wants to learn something new. We are available to all of you at any moment to assist you.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Mentorship to beginners</h2>
          <p class="leading-relaxed text-base mb-4">We will assist you at every step of your Open Source Journey , guiding you along the way and assisting you anytime you need any help whenever you are stuck.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Regular Meetups</h2>
          <p class="leading-relaxed text-base mb-4">We will be organising regular meet-ups that will undoubtedly help you connect with others who share your interests and spread your knowledge, which also fosters confidence.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Events and Bootcamps</h2>
          <p class="leading-relaxed text-base mb-4"> We conduct Events and Bootcamps regularly get you more involved with the Open Source Culture and to improve your networking.</p>
        </div>
      </div>
      <a href="https://linktr.ee/fosscu" target="_blank" rel="noopener noreferrer">
      <button
        class="flex mx-auto mt-16 text-black bg-[#00ff00] font-poppins border-0 py-2 px-8 focus:outline-none rounded text-lg hover:shadow-md hover:shadow-white">Connect with Us 🤝
      </button>
      </a>
    </div>
  </div>
  <Footer/>
  </div>
  )
}
export default AboutOrg
