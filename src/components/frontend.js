import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import arrow from "../assets/img/frontend_icons/icons-arrow.png";
import downarrow from "../assets/img/frontend_icons/down_arrow.png";
const Frontend = () => {
    const courses = [
        { name: "HTML / CSS", link: "/html_css" },
        { name: "TAILWIND", link: "/tailwind" },
        { name: "JAVA SCRIPT", link: "/javascript" },
        { name: "REACT JS", link: "/reactjs" },
        { name: "NEXT JS", link: "/nextjs" },
        { name: "VUE JS", link: "/vuejs" },
        { name: "THREE JS", link: "/threejs" },
        { name: "REACT NATIVE", link: "/reactnative" },
        { name: "ELECTRON", link: "/electron" },
    ];
    return (_jsxs("div", { className: "bg-gray-800 min-h-screen py-20", children: [_jsx("h1", { className: "w-full mb-24 text-white px-4 tracking-tight text-center text-5xl", children: "Complete Frontend Roadmap" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4 mx-4 md:mx-20", children: courses.map((course, index) => (_jsxs(React.Fragment, { children: [_jsx("a", { href: course.link, className: "w-full sm:w-auto sm:mb-10 flex flex-col shadow-lg shadow-[#00df9a] transition-shadow hover:bg-opacity-90 duration-[320ms] bg-gray-900 rounded-lg text-green-400 hover:bg-[#00df9a] hover:shadow-none hover:text-white", children: _jsx("h2", { className: "text-center font-bold text-3xl px-4 py-6", children: course.name }) }), index < courses.length - 1 && (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("img", { src: arrow, alt: "arrow", className: "hidden sm:block w-20 h-20" }), _jsx("img", { src: downarrow, alt: "down arrow", className: "block sm:hidden w-20 h-20" })] }))] }, index))) })] }));
};
export default Frontend;
