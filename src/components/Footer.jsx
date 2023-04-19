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
            <a href="/building">
              <li className="py-2 text-sum">Documentation</li>
            </a>
            <a href="/guide">
              <li className="py-2 text-sum">Guides</li>
            </a>
            <a href="/building">
              <li className="py-2 text-sum">API Status</li>
            </a>
            <a href='/faq'>
              <li className='py-2 text-sum'>FAQ</li>
            </a>

          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Organization</h6>
          <ul>
            <a href="/about">
              <li className="py-2 text-sum">About</li>
            </a>
            <a href="https://fosscu-blog.vercel.app/">
              <li className="py-2 text-sum">Blog</li>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScXC6WhL-tIYUXqeqsJM4Dmp3SzW3HDTw0Em06aV2zll_QcrA/viewform">
              <li className="py-2 text-sum">Join Us</li>
            </a>
            <a href="https://github.com/FOSS-Community/">
              <li className="py-2 text-sum">Contribute</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <a href="/building">
              <li className="py-2 text-sum">Claim</li>
            </a>
            <a href="/building">
              <li className="py-2 text-sum">Policy</li>
            </a>
            <a href="/building">
              <li className="py-2 text-sum">Terms</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
