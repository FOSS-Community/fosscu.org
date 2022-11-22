import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Akshat_Sharma from '../assets/img/team/akshat_sharma.png'
import Kansihk_Pachauri from '../assets/img/team/kanishk_pachauri.jpeg'
import Mayank from '../assets/img/team/mayank.jpeg'
import Aditya_Bansal from '../assets/img/team/aditya_bansal.jpeg'
import Yash_Varshney from '../assets/img/team/yash_varshney.jpeg'
import Aryan_Kaushik from '../assets/img/team/aryan_kaushik.jpeg'




import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full py-[2rem]'>
        <div className="mx-auto justify-center py-[4rem]">
          <h1 className='text-6xl font-bold text-center text-opensource-green'>Our Volunteers </h1> 
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Akshat_Sharma} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>AKSHAT SHARMA</h2>
                <p className='text-center text-1xl font-bold text-white'>President and Web3 Developer</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} color='white'/> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} color='white'/> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} color='white'/> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Kansihk_Pachauri} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>KANISHK PACHAURI</h2>
                <p className='text-center text-1xl font-bold text-white'>Community Manager and Backend Developer</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} color='white' /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} color='white' /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} color='white' /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aryan_Kaushik} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>ARYAN KAUSHIK</h2>
                <p className='text-center text-1xl font-bold text-white'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/aryan__kaushik_/"> <FaInstagram size={30} color='white'/> </a>
                    <a href="https://twitter.com/Aryan_Ka1"> <FaTwitterSquare size={30} color='white' /> </a>
                    <a href="https://github.com/Aryan20/"> <FaGithubSquare size={30} color='white' /> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aditya_Bansal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>ADITYA BANSAL</h2>
                <p className='text-center text-1xl font-bold text-white'>Content and Discord Lead</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} color='white' /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} color='white' /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} color='white' /> </a>
                </div>
            </div>


            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Yash_Varshney} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>YASH VARSHNEY</h2>
                <p className='text-center text-1xl font-bold text-white'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} color='white' /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30}  color='white'/> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} color='white' /> </a>
                </div>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Mayank} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8  text-white'>MAYANK</h2>
                <p className='text-center text-1xl font-bold  text-white'>T.B.A</p>
                <div className='flex justify-between mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://www.instagram.com/fosscu/"> <FaInstagram size={30} color='white' /> </a>
                    <a href="https://twitter.com/fosscuk"> <FaTwitterSquare size={30} color='white' /> </a>
                    <a href="https://github.com/FOSS-Community/"> <FaGithubSquare size={30} color='white' /> </a>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Team 