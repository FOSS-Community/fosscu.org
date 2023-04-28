import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
   
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <RiOpenSourceFill size={60} color="green" />
        <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">
          {" "}
          FOSSCU
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="p-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            {" "}
            <Link to="/team"> Team </Link>{" "}
          </li>
          <li className="p-4">
            <a href="/resource">Resources</a>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <center>
            <RiOpenSourceFill size={65} color="green" />
            <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">
              {" "}
              FOSSCU
            </h1>
          </center>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <Link to="/"> Home </Link>{" "}
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/team"> Team </Link>{" "}
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://github.com/FOSS-Community">Projects</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
