import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Electron from "../../components/Frontend_files/Electron";
import electronData from "../../data/Front_end/electronjs.json";
const Eletron = () => {
    return (_jsxs("div", { children: [_jsx("div", { children: _jsx(Navbar, {}) }), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "Electron Learning Resources :" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), electronData.map((electronjs, index) => (_jsx(Electron, { head: electronjs.head, para1: electronjs.para1, para2: electronjs.para2, para3: electronjs.para3, link: electronjs.link, videoLink: electronjs.videoLink, image: electronjs.image }, index))), _jsx("div", { children: _jsx(Footer, {}) })] }));
};
export default Eletron;
