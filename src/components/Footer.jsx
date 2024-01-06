import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      {/* ... (your existing code) ... */}
      <div className='flex justify-between md:w-[75%] my-6'>
        <a href="https://www.instagram.com/fosscu/" className="transition duration-300 ease-in-out hover:scale-125" target="_blank">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com/fosscuk" className="transition duration-300 ease-in-out hover:scale-125" target="_blank">
          <FaTwitterSquare size={30} />
        </a>
        <a href="https://linkedin.com/company/fosscu/" className="transition duration-300 ease-in-out hover:scale-125" target="_blank">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/FOSS-Community/" className="transition duration-300 ease-in-out hover:scale-125" target="_blank">
          <FaGithubSquare size={30} />
        </a>
      </div>
      {/* ... (the rest of your code) ... */}
    </div>
  );
};

export default Footer;
