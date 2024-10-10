import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Vue_js from "../../components/Frontend_files/Vue_js";
import vuejsData from "../../data/Front_end/vuejs.json";
const Vue__js = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "Vue.js Learning Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), vuejsData.map((vuejs, index) => (_jsx(Vue_js, { head: vuejs.head, para1: vuejs.para1, para2: vuejs.para2 || "", para3: vuejs.para3 || "", link: vuejs.link || "", videoLink: vuejs.videoLink || "" }, index))), _jsx(Footer, {})] }));
};
export default Vue__js;
