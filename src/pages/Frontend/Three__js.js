import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Three_js from "../../components/Frontend_files/Three_js";
import threejsData from "../../data/Front_end/threejs.json";
const Three__js = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "Three.js Learning Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), threejsData.map((threejs, index) => (_jsx(Three_js, { head: threejs.head, para1: threejs.para1, para2: threejs.para2 || "", para3: threejs.para3 || "", link: threejs.link || "", videoLink: threejs.videoLink || "" }, index))), _jsx(Footer, {})] }));
};
export default Three__js;
