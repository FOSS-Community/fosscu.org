import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import DinoGame from 'react-chrome-dino-ts';
import 'react-chrome-dino-ts/index.css';
const PageNotFound = () => {
    return (_jsxs("div", { className: "flex text-white flex-col items-center justify-center p-10", children: [_jsx(DinoGame, {}), _jsx("p", { className: "font-bold md:text-3xl sm:text-2xl text-xl p-4 text-white", children: "Sorry, the page you are looking for does not exist." }), _jsx(Link, { to: "/", className: "inline-block", children: _jsx("button", { className: "hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[60px] rounded-md font-medium text-black", children: "GO BACK HOME" }) })] }));
};
export default PageNotFound;
