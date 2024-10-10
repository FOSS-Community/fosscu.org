import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { useLocation, Link, Outlet } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setNav(false); // Close the nav when a link is clicked on mobile
  };

  useEffect(() => {
    const checkSize = () => {
      setNav(window.innerWidth >= 768 ? false : nav);
    };

    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [nav]);

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <RiOpenSourceFill className="flex-shrink-0" size={31} color="green" />
        <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">FOSSCU</h1>
        <ul className="hidden md:flex">
          <li
            className={`p-4 ${
              activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/" onClick={() => handleLinkClick("/")}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li
            className={`p-4 ${
              activeLink === "/about"
                ? "text-[#0DFF1C]"
                : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/about" onClick={() => handleLinkClick("/about")}>
              About
            </Link>
          </li>
          <li
            className={`p-4 ${
              activeLink === "/team" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/team" onClick={() => handleLinkClick("/team")}>
              {" "}
              Team{" "}
            </Link>
          </li>
          <li
            className={`p-4 ${
              activeLink === "/resource"
                ? "text-[#0DFF1C]"
                : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/resource" onClick={() => handleLinkClick("/resource")}>
              Resources
            </Link>
          </li>
          <li
            className={`p-4 ${
              activeLink === "/contact"
                ? "text-[#0DFF1C]"
                : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
              Contact
            </Link>
          </li>
          <li
            className={`p-4 ${
              activeLink === "/shipyard"
                ? "text-[#0DFF1C]"
                : "hover:text-[#0DFF1C]"
            }`}
          >
            <Link to="/shipyard" onClick={() => handleLinkClick("/shipyard")}>
              Shipyard
            </Link>
          </li>

          <div className="relative group xl:mr-0 mr-8">
            <button className="px-4 pt-4 pb-0 hover:text-[#0DFF1C] flex items-center text-white">
              <span className="mr-1">
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
            <div className="translate-x-[-0em] hidden absolute bg-black text-white rounded mt-1 w-36 group-hover:block hover:rounded-md">
              <a
                href="/resource"
                className="block px-4 py-2 hover:text-[#0dff1c]"
              >
                Resources
              </a>
              <a
                href="https://docs.fosscu.org"
                className="block px-4 py-2 hover:text-[#0dff1c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Handbook
              </a>
              <a
                href="https://lu.ma/fosscu"
                className="block px-4 py-2 hover:text-[#0dff1c]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar
              </a>
              <a
                href="https://github.com/FOSS-Community/"
                className="block px-4 py-2 hover:text-[#0dff1c]"
                target="_blank"
                rel="noopener noreferrer"
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
              ? "fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col items-center">
            <RiOpenSourceFill size={65} color="green" />
            <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">
              FOSSCU
            </h1>
          </div>

          <ul className="uppercase p-4">
            <li
              className={`p-4 ${
                activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/" onClick={() => handleLinkClick("/")}>
                Home
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeLink === "/about"
                  ? "text-[#0DFF1C]"
                  : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/about" onClick={() => handleLinkClick("/about")}>
                About
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeLink === "/team"
                  ? "text-[#0DFF1C]"
                  : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/team" onClick={() => handleLinkClick("/team")}>
                Team
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeLink === "/shipyard"
                  ? "text-[#0DFF1C]"
                  : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/shipyard" onClick={() => handleLinkClick("/shipyard")}>
                Shipyard
              </Link>
            </li>
            <li
              className={`p-4 ${
                activeLink === "/resource"
                  ? "text-[#0DFF1C]"
                  : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/resource" onClick={() => handleLinkClick("/resource")}>
                Resources
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="https://docs.fosscu.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Handbook
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="https://github.com/FOSS-Community"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </a>
            </li>
            <li
              className={`p-4 ${
                activeLink === "/contact"
                  ? "text-[#0DFF1C]"
                  : "hover:text-[#0DFF1C]"
              } border-b border-gray-600`}
            >
              <Link to="/contact" onClick={() => handleLinkClick("/contact")}>
                Contact
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="https://lu.ma/fosscu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendar
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="https://github.com/FOSS-Community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
