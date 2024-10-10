import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Javascript from "../../components/Frontend_files/Javascript";
import jsData from "../../data/Front_end/JS.json";
const JSc = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "JavaScript Learning Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), jsData.map((JS, index) => (_jsx(Javascript, { head: JS.head, para1: JS.para1, para2: JS.para2 || "", para3: JS.para3 || "", link: JS.link, videoLink: JS.videoLink || "" }, index))), _jsx(Footer, {})] }));
};
export default JSc;
