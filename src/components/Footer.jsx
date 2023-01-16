import React from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FOSSCU</h1>
        <p className='py-4'>We ♥️ Open-Souce and Community</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
            <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
            <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'><a href="fosscu-blog.vercel.app">Blog</a></li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'><a href="fosscu-blog.vercel.app">Call for Volunteers</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
