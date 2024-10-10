import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Next_js from "../../components/Frontend_files/Next_js";
import nextjsData from "../../data/Front_end/nextjs.json";
const Next__js = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "Next.js Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), nextjsData.map((nextjs, index) => (_jsx(Next_js, { head: nextjs.head, para1: nextjs.para1, para2: nextjs.para2 || "", para3: nextjs.para3 || "", link: nextjs.link || "", videoLink: nextjs.videoLink || "" }, index))), _jsx(Footer, {})] }));
};
export default Next__js;
