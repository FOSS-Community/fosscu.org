import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { useLocation, Link, Outlet } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav((prevNav) => !prevNav);
    };
    const handleLinkClick = (to) => {
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white", children: [_jsx(RiOpenSourceFill, { className: "flex-shrink-0", size: 31, color: "green" }), _jsx("h1", { className: "w-full text-3xl font-bold text-[#0DFF1C] m-4", children: "FOSSCU" }), _jsxs("ul", { className: "hidden md:flex", children: [_jsx("li", { className: `p-4 ${activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"}`, children: _jsxs(Link, { to: "/", onClick: () => handleLinkClick("/"), children: [" ", "Home", " "] }) }), _jsx("li", { className: `p-4 ${activeLink === "/about"
                                    ? "text-[#0DFF1C]"
                                    : "hover:text-[#0DFF1C]"}`, children: _jsx(Link, { to: "/about", onClick: () => handleLinkClick("/about"), children: "About" }) }), _jsx("li", { className: `p-4 ${activeLink === "/team" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"}`, children: _jsxs(Link, { to: "/team", onClick: () => handleLinkClick("/team"), children: [" ", "Team", " "] }) }), _jsx("li", { className: `p-4 ${activeLink === "/resource"
                                    ? "text-[#0DFF1C]"
                                    : "hover:text-[#0DFF1C]"}`, children: _jsx(Link, { to: "/resource", onClick: () => handleLinkClick("/resource"), children: "Resources" }) }), _jsx("li", { className: `p-4 ${activeLink === "/contact"
                                    ? "text-[#0DFF1C]"
                                    : "hover:text-[#0DFF1C]"}`, children: _jsx(Link, { to: "/contact", onClick: () => handleLinkClick("/contact"), children: "Contact" }) }), _jsx("li", { className: `p-4 ${activeLink === "/shipyard"
                                    ? "text-[#0DFF1C]"
                                    : "hover:text-[#0DFF1C]"}`, children: _jsx(Link, { to: "/shipyard", onClick: () => handleLinkClick("/shipyard"), children: "Shipyard" }) }), _jsxs("div", { className: "relative group xl:mr-0 mr-8", children: [_jsxs("button", { className: "px-4 pt-4 pb-0 hover:text-[#0DFF1C] flex items-center text-white", children: [_jsx("span", { className: "mr-1", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-down", viewBox: "0 0 16 16", children: _jsx("path", { fillRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" }) }) }), _jsx("span", { children: "More" })] }), _jsxs("div", { className: "translate-x-[-0em] hidden absolute bg-black text-white rounded mt-1 w-36 group-hover:block hover:rounded-md", children: [_jsx("a", { href: "/resource", className: "block px-4 py-2 hover:text-[#0dff1c]", children: "Resources" }), _jsx("a", { href: "https://docs.fosscu.org", className: "block px-4 py-2 hover:text-[#0dff1c]", target: "_blank", rel: "noopener noreferrer", children: "Handbook" }), _jsx("a", { href: "https://lu.ma/fosscu", className: "block px-4 py-2 hover:text-[#0dff1c]", target: "_blank", rel: "noopener noreferrer", children: "Calendar" }), _jsx("a", { href: "https://github.com/FOSS-Community/", className: "block px-4 py-2 hover:text-[#0dff1c]", target: "_blank", rel: "noopener noreferrer", children: "Contribute" })] })] })] }), _jsx("div", { onClick: handleNav, className: "block md:hidden", children: nav ? _jsx(AiOutlineClose, { size: 20 }) : _jsx(AiOutlineMenu, { size: 20 }) }), _jsxs("div", { className: nav
                            ? "fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500"
                            : "fixed left-[-100%]", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx(RiOpenSourceFill, { size: 65, color: "green" }), _jsx("h1", { className: "w-full text-3xl font-bold text-[#0DFF1C] m-4", children: "FOSSCU" })] }), _jsxs("ul", { className: "uppercase p-4", children: [_jsx("li", { className: `p-4 ${activeLink === "/" ? "text-[#0DFF1C]" : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/", onClick: () => handleLinkClick("/"), children: "Home" }) }), _jsx("li", { className: `p-4 ${activeLink === "/about"
                                            ? "text-[#0DFF1C]"
                                            : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/about", onClick: () => handleLinkClick("/about"), children: "About" }) }), _jsx("li", { className: `p-4 ${activeLink === "/team"
                                            ? "text-[#0DFF1C]"
                                            : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/team", onClick: () => handleLinkClick("/team"), children: "Team" }) }), _jsx("li", { className: `p-4 ${activeLink === "/shipyard"
                                            ? "text-[#0DFF1C]"
                                            : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/shipyard", onClick: () => handleLinkClick("/shipyard"), children: "Shipyard" }) }), _jsx("li", { className: `p-4 ${activeLink === "/resource"
                                            ? "text-[#0DFF1C]"
                                            : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/resource", onClick: () => handleLinkClick("/resource"), children: "Resources" }) }), _jsx("li", { className: "p-4 border-b border-gray-600", children: _jsx("a", { href: "https://docs.fosscu.org", target: "_blank", rel: "noopener noreferrer", children: "Handbook" }) }), _jsx("li", { className: "p-4 border-b border-gray-600", children: _jsx("a", { href: "https://github.com/FOSS-Community", target: "_blank", rel: "noopener noreferrer", children: "Projects" }) }), _jsx("li", { className: `p-4 ${activeLink === "/contact"
                                            ? "text-[#0DFF1C]"
                                            : "hover:text-[#0DFF1C]"} border-b border-gray-600`, children: _jsx(Link, { to: "/contact", onClick: () => handleLinkClick("/contact"), children: "Contact" }) }), _jsx("li", { className: "p-4 border-b border-gray-600", children: _jsx("a", { href: "https://lu.ma/fosscu", target: "_blank", rel: "noopener noreferrer", children: "Calendar" }) }), _jsx("li", { className: "p-4 border-b border-gray-600", children: _jsx("a", { href: "https://github.com/FOSS-Community/", target: "_blank", rel: "noopener noreferrer", children: "Contribute" }) })] })] })] }), _jsx(Outlet, {})] }));
};
export default Navbar;
