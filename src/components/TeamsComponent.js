import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaLink } from "react-icons/fa";
const TeamsComponent = (props) => {
    return (_jsxs("div", { className: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300", children: [_jsx("img", { className: "w-20 mx-auto mt-[-3rem] bg-white profile_pic", src: props.image, alt: props.name }), _jsx("h2", { className: "text-2xl font-bold text-center py-8 text-white", children: props.name }), _jsx("p", { className: "text-center text-1xl font-bold text-white", children: props.position }), _jsx("div", { className: "flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3", children: _jsx("a", { href: props.link.url, target: props.link.target, rel: props.link.rel, children: _jsx(FaLink, { size: 30, color: "white" }) }) })] }));
};
export default TeamsComponent;
