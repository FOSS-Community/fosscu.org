import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
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
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto  px-4  text-white">
        <RiOpenSourceFill className="flex-shrink-0" size={31} color="green" />
        <h1 className="w-full text-3xl font-bold text-[#0DFF1C] p-4">
          {" "}
          FOSSCU
        </h1>
        <ul className="hidden md:flex">
          <li
            className={`p-4 ${activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
              }`}
          >
            <Link to="/"> Home </Link>{" "}
          </li>
          <li
            className={`p-4 ${activeLink === "/about"
              ? "text-[#0DFF1C]"
              : "hover:text-[#0DFF1C]"
              }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`p-4 ${activeLink === "/team" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
              }`}
          >
            <Link to="/team"> Team </Link>{" "}
          </li>

          <li
            className={`p-4 ${activeLink === "/resource"
              ? "text-[#0DFF1C]"
              : "hover:text-[#0DFF1C]"
              } hover:text-[#0DFF1C] translate-x-[-3.2em] hidden absolute  bg-white text-gray-900 rounded mt-1 w-48 group-hover:block hover:rounded-md `}
          >
            <a href="/resource">Resources</a>
          </li>

          <li
            className={`p-4 ${activeLink === "/contact"
              ? "text-[#0DFF1C]"
              : "hover:text-[#0DFF1C]"
              } hover:text-[#0DFF1C]`}
          >
            <Link to="/contact">Contact</Link>
          </li>

          <li
            className={`p-4 ${activeLink === "/shipyard"
              ? "text-[#0DFF1C]"
              : "hover:text-[#0DFF1C]"
              } hover:text-[#0DFF1C]`}
          >
            <Link to="/shipyard">Shipyard</Link>
          </li>

          <div className="relative group xl:mr-0 mr-8">
            <button className=" px-4 pt-4 pb-0 hover:text-[#0DFF1C] flex items-center  text-white ">
              <span className="mr-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              <span>More</span>
            </button>
            <div className="translate-x-[-0em] hidden absolute bg-black text-white rounded mt-1 w-36 group-hover:block hover:rounded-md ">
              <a href="/resource" className="block px-4 py-2 hover:text-[#0dff1c]">
                Resources
              </a>
              <a
                href="https://docs.fosscu.org"
                className="block px-4 py-2 hover:text-[#0dff1c]"
                target="blank"
              >
                Handbook
              </a>
              <a
                href="https://lu.ma/fosscu"
                rel="noreferrer"
                target="blank"
                className="block px-4 py-2 hover:text-[#0dff1c]"
              >
                Calendar
              </a>
              <a
                href="https://github.com/FOSS-Community/"
                target="blank"
                className="block px-4 py-2 hover:text-[#0dff1c]"
              >
                Contribute
              </a>
            </div>
          </div>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500 "
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
            <li
              className={`p-4 ${activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/" onClick={() => handleLinkClick("/")}>
                Home
              </Link>
            </li>
            <li
              className={`p-4 ${activeLink === "/about" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/about">About</Link>
            </li>
            <li

              className={`p-4 ${activeLink === "/team" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/team">Team</Link>
            </li>
            <li
              className={`p-4 ${activeLink === "/shipyard" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/shipyard" onClick={() => handleLinkClick("/shipyard")}>
                Shipyard
              </Link>
            </li>
            <li
              className={`p-4 ${activeLink === "/resource" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/resource">Resources</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://docs.fosscu.org">Handbook</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://github.com/FOSS-Community">Projects</a>
            </li>
            <li

              className={`p-4 ${activeLink === "/contact" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
                } border-b border-gray-600`}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://lu.ma/fosscu">Calendar</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://github.com/FOSS-Community/">Contribute</a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
