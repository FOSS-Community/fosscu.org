import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Roadmaps from "../components/Roadmaps";
import frontendData from "../data/frontend.json";
import { AiOutlineMenu } from 'react-icons/ai';


const Roadmap = () => {
    return (
        <div>
            <Navbar />
            <aside className="fixed top-0 border-r-2  left-0 z-40  w-[20rem] pb-24  h-screen  transition-transform -translate-x-full   sm:translate-x-0  border-gray-700" >
                <div className="flex flex-row  pl-4 pb-3 pt-5 border-b border-gray-700 mb-6">
                    <svg className="w-10 fill-current text-white" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                        <path d="m692.48 263.77-165.13-189.09c-10.523-12.074-28.023-12.074-38.586 0-10.02 11.484-10.02 29.73 0 41.215l147.13 168.48-147.13 168.48c-10.02 11.484-10.02 29.727 0 41.211 10.562 12.078 28.062 12.078 38.586 0l165.13-189.09c10.043-11.484 10.043-29.727 0-41.211m-481.25-189.09c-10.543-12.078-28.043-12.078-38.586 0l-165.13 189.09c-10.02 11.484-10.02 29.727 0 41.211l165.13 189.09c10.543 12.074 28.043 12.074 38.586 0 10.02-11.484 10.02-29.73 0-41.215l-147.13-168.48 147.13-168.48c10.02-11.484 10.02-29.727 0-41.211m192.18-52.008c-12.426-3.3242-25.223 4.0469-28.57 16.473l-128.19 478.38c-3.3242 12.426 4.0703 25.203 16.516 28.547 12.445 3.3477 25.242-4.0469 28.59-16.469l128.17-478.36c3.3242-12.449-4.0703-25.223-16.516-28.57" fill-rule="evenodd" />
                    </svg>
                    <h1 className="text-white text-3xl pl-4">FRONTEND</h1>
                </div>
                <div className="sidebar  px-3 pb-4  h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" >
                    <ul className="space-y-6 font-medium ">
                        <li className="text-white pl-4  tracking-wide text-lg">
                            HTML Resources
                            <ul className="pl-4">
                                <li className="">
                                    <a  className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c] active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>

                                    <a  className="flex items-center rounded-lg  hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black  hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">freeCodeCamp</span>
                                    </a>
                                    <a  className="flex items-center rounded-lg  hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black  hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current" />
                                        </span>
                                        <span className="ml-1">Bro Code</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            CSS Resources
                            <ul className="pl-4">
                                <li className="">
                                    <a  className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">freeCodeCamp</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current" />
                                        </span>
                                        <span className="ml-1">Bro Code</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4 tracking-wide text-lg">
                            JavaScript
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1 tracking-tight  ">The Modern JS (Read)</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">JavaScript Mastery</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current" />
                                        </span>
                                        <span className="ml-1">freeCodeCamp</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current" />
                                        </span>
                                        <span className="ml-1 tracking-tight">Build 30 things in 30 days</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            Tailwind CSS
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">Documentation</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            React JS
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">Documentation</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">freeCodeCamp</span>
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">freeCodeCamp(Youtube)</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            Next JS
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1"></span>Codevolution
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            Vue JS
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1"></span>Documentation
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            Three JS
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1"></span>Chris Courses
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">Documentatioin</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            React Native
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1"></span>Documentation
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">The Net Ninja</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white pl-4  tracking-wide text-lg">
                            Electron
                            <ul className="pl-4">
                                <li className="">
                                    <a href="#" className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-[#00df9a] ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1"></span>Codevolution
                                    </a>
                                    <a href="#" className="flex items-center rounded-lg   hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                        <span className="p-2 rounded hover:bg-gray-500 ">
                                            <AiOutlineMenu size={18} className="fill-current " />
                                        </span>
                                        <span className="ml-1">Documentation</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </aside>
            {frontendData.map((frontend) => (
                <Roadmaps
                    head={frontend.head}
                    para1={frontend.para1}
                    para2={frontend.para2}
                    para3={frontend.para3}
                    link={frontend.link}
                    videoLink={frontend.videoLink}
                    image={frontend.image}
                />
            )
            )}
            <Footer />

        </div>
    )
}

export default Roadmap;
