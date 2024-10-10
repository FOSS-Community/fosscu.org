import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tailwindd from "../../components/Frontend_files/Tailwindd";
import tailwindData from "../../data/Front_end/tailwind.json";
const Tail_wind = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "Tailwind Learning Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), tailwindData.map((tailwind, index) => (_jsx(Tailwindd, { head: tailwind.head, para1: tailwind.para1, para2: tailwind.para2 || "", para3: tailwind.para3 || "", link: tailwind.link || "", videoLink: tailwind.videoLink || "" }, index))), _jsx(Footer, {})] }));
};
export default Tail_wind;
