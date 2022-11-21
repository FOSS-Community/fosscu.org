import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FOSSCU from "../assets/img/logo/fosscu.png"

 const AboutOrg = () => {
  return (
    <div>
      <Navbar/>
    <div class="text-[#ffffff] body-font bg-neutral-900">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <div class="flex flex-row mx-auto">
        <img className='w-[30px] sm:w-[65px] ' src={FOSSCU} alt="/" />     
        <h2 class=" text-lg sm:text-3xl  text-[#00FF00] tracking-widest font title-font mb-1 sm:ml-5 sm:mt-4 ml-2 mt-2 " >ABOUT FOSSCU-KIET</h2>
      </div>
        <p class="lg:w-2/3 mx-auto mt-7 leading-relaxed "> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eligendi ea ullam nobis doloremque, totam adipisci numquam voluptatum. Laudantium alias ratione accusamus
          obcaecati quam recusandae aliquid.</p>
        <p class="mt-8 text-[#1AFF1A]">Some key points about our community.</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Open to all</h2>
          <p class="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cum
            ratione doloribus labore, ullam alias rerum explicabo, eius itaque, consequatur totam maxime? Unde
            laboriosam recusandae quod ipsa distinctio. Quia praesentium id ex voluptate.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Mentorship to beginners</h2>
          <p class="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cum
            ratione doloribus labore, ullam alias rerum explicabo, eius itaque, consequatur totam maxime? Unde
            laboriosam recusandae quod ipsa distinctio. Quia praesentium id ex voluptate.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Regular Meetups</h2>
          <p class="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cum
            ratione doloribus labore, ullam alias rerum explicabo, eius itaque, consequatur totam maxime? Unde
            laboriosam recusandae quod ipsa distinctio. Quia praesentium id ex voluptate.</p>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
          <h2 class="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Events and Bootcamps</h2>
          <p class="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cum
            ratione doloribus labore, ullam alias rerum explicabo, eius itaque, consequatur totam maxime? Unde
            laboriosam recusandae quod ipsa distinctio. Quia praesentium id ex voluptate.</p>
        </div>
      </div>
      <button
        class="flex mx-auto mt-16 text-black bg-[#00ff00] font-poppins border-0 py-2 px-8 focus:outline-none rounded text-lg hover:shadow-md hover:shadow-white">JOIN OUR COMMUNITY
      </button>
    </div>
  </div>
  <Footer/>
  </div>
  )
}
export default AboutOrg
