import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HTML_CSS from "../../components/Frontend_files/HTML_CSS";
import htmlData from "../../data/Front_end/htcs.json";
const HTMLCSS = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("p", { className: "text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white", children: "HTML and CSS Resources:" }), _jsx("div", { className: "border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6" }), htmlData.map((htcs) => (_jsx(HTML_CSS, { head: htcs.head, para1: htcs.para1, para2: htcs.para2 || "", para3: htcs.para3 || "", link: htcs.link || "#", videoLink: htcs.videoLink }, htcs.head))), _jsx(Footer, {})] }));
};
export default HTMLCSS;
