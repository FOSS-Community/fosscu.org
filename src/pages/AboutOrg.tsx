import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FOSSCU from "../assets/img/logo/fosscu.png";

const AboutOrg: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="text-[#ffffff] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="flex flex-row mx-auto">
              <img className="w-[30px] sm:w-[65px]" src={FOSSCU} alt="FOSSCU Logo" />
              <h2 className="text-lg sm:text-3xl text-[#00FF00] tracking-widest font title-font mb-1 sm:ml-5 sm:mt-4 ml-2 mt-2">
                ABOUT FOSSCU-KIET
              </h2>
            </div>
            <p className="lg:w-2/3 mx-auto mt-7 leading-relaxed">
              We at FOSSCU (Free and Open-Source Software Community United) are a group of individuals who are constantly working to promote Open-Source Culture.
            </p>
            <p className="mt-8 text-[#1AFF1A]">Some key points about our community:</p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Open to all</h2>
              <p className="leading-relaxed text-base mb-4">
                We are a community, not a club. Anyone who is eager to start using or contributing to open source software, or who wants to learn something new, can join. We are available at any moment to assist you.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Mentorship to beginners</h2>
              <p className="leading-relaxed text-base mb-4">
                We will assist you at every step of your Open Source Journey, guiding you along the way and helping you whenever you get stuck.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Regular Meetups</h2>
              <p className="leading-relaxed text-base mb-4">
                We organize regular meet-ups that help you connect with others who share your interests, spread knowledge, and foster confidence.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-[#00FF00] font-medium title-font mb-2">Events and Bootcamps</h2>
              <p className="leading-relaxed text-base mb-4">
                We conduct events and bootcamps regularly to get you more involved with the Open Source Culture and improve your networking.
              </p>
            </div>
          </div>
          <a href="https://linktr.ee/fosscu" target="_blank" rel="noopener noreferrer">
            <button className="flex mx-auto mt-16 text-black bg-[#00ff00] font-poppins border-0 py-2 px-8 focus:outline-none rounded text-lg hover:shadow-md hover:shadow-white">
              Connect with Us 🤝
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutOrg;
