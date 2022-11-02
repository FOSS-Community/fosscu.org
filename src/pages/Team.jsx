import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Aditya_Bansal from '../assets/img/team/aditya_bansal.jpeg'
import Akshat_Sharma from '../assets/img/team/akshat_sharma.png'
import Anjuman_Hassan from '../assets/img/team/anjuman_hassan.jpeg'
import Aryan_Kaushik from '../assets/img/team/aryan_kaushik.jpeg'
import Devyanshi_Srivastava from '../assets/img/team/devyanshi_srivastava.jpeg'
import Kansihk_Pachauri from '../assets/img/team/kanishk_pachauri.jpeg'
import Mayank from '../assets/img/team/mayank.jpeg'
import Riya_Jakhanda from '../assets/img/team/riya_jakhanda.jpeg'
import Yash_Varshney from '../assets/img/team/yash_varshney.jpeg'


import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full py-[2rem] bg-white'>
        <div className="mx-auto justify-center py-[4rem]">
          <h2 className='text-2xl font-bold text-center'>Our Team </h2> 
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Akshat_Sharma} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>AKSHAT SHARMA</h2>
                <p className='text-center text-1xl font-bold'>President and Web3 Developer</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Kansihk_Pachauri} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>KANISHK PACHAURI</h2>
                <p className='text-center text-1xl font-bold'>Community Manager and Backend Developer</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Anjuman_Hassan} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>ANJUMAN HASSAN</h2>
                <p className='text-center text-1xl font-bold'>President for Women In Tech</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aryan_Kaushik} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>ARYAN KAUSHIK</h2>
                <p className='text-center text-1xl font-bold'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/aryan__kaushik_/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/Aryan_Ka1"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/Aryan20/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aditya_Bansal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>ADITYA BANSAL</h2>
                <p className='text-center text-1xl font-bold'>Content and Discord Lead</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Devyanshi_Srivastava} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>DEVYANSHI SRIVASTAVA</h2>
                <p className='text-center text-1xl font-bold'>Social Media and Content Lead</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Riya_Jakhanda} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>RIYA JHANKDA</h2>
                <p className='text-center text-1xl font-bold'>Public Relation Lead</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Yash_Varshney} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>YASH VARSHNEY</h2>
                <p className='text-center text-1xl font-bold'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Mayank} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>MAYANK</h2>
                <p className='text-center text-1xl font-bold'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} /> </a>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Team 