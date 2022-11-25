import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Akshat_Sharma from '../assets/img/team/akshat_sharma.png'
import Kansihk_Pachauri from '../assets/img/team/kanishk_pachauri.jpeg'
import Mayank from '../assets/img/team/mayank.jpeg'
import Aditya_Bansal from '../assets/img/team/aditya_bansal.jpeg'
import Yash_Varshney from '../assets/img/team/yash_varshney.jpeg'
import Aryan_Kaushik from '../assets/img/team/aryan_kaushik.jpeg'
import Srijan_Srivastava from '../assets/img/team/Srijan_Srivastava.jpg'
import Tejaswita_Agarwal from '../assets/img/team/Tejaswita_Agarwal.jpg'
import Devanshu_Saxena from '../assets/img/team/Devanshu_Saxena.jpg'

import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLink
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
                <p className='text-center text-1xl font-bold text-white'>President and Blockchain Developer</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                    <a href="https://linkfree.eddiehub.io/akshatcoder-hash"> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Kansihk_Pachauri} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>KANISHK PACHAURI</h2>
                <p className='text-center text-1xl font-bold text-white'>Community Manager and Backend Developer</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aryan_Kaushik} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>ARYAN KAUSHIK</h2>
                <p className='text-center text-1xl font-bold text-white'>Volunteer in Linux Software Development</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Aditya_Bansal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>ADITYA BANSAL</h2>
                <p className='text-center text-1xl font-bold text-white'>Volunteer in Social Media</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href="https://linktr.ee/adityabansal2310 "> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>


            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Mayank} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8  text-white'>MAYANK</h2>
                <p className='text-center text-1xl font-bold  text-white'>Volunteer in Frontend Development</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Yash_Varshney} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>YASH VARSHNEY</h2>
                <p className='text-center text-1xl font-bold text-white'>Volunteer in Web Development</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Srijan_Srivastava} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8  text-white'>Srijan Srivastava</h2>
                <p className='text-center text-1xl font-bold  text-white'>Volunteer in Frontend Development</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Tejaswita_Agarwal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8 text-white'>Tejaswita Agarwal</h2>
                <p className='text-center text-1xl font-bold text-white'>Volunteer in Public Relations</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white profile_pic' src={Devanshu_Saxena} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8  text-white'>Devanshu Saxena</h2>
                <p className='text-center text-1xl font-bold  text-white'>Volunteer in Web Development</p>
                <div className='flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3'>
                <a href=""> <FaLink  size={30} color='white'/> </a>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Team 