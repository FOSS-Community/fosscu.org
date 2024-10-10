import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ReactNative = (props) => {
    const [check, setCheck] = useState(false);
    return (_jsx("div", { children: _jsx("section", { className: "", children: _jsxs("div", { className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6", children: [_jsxs("div", { className: "max-w-screen-xl sm:text-lg text-gray-100", children: [_jsx("h2", { className: "text-4xl mb-12 tracking-tight font-bold text-white", children: props.head }), _jsx("p", { className: "mb-4", children: props.para1 }), _jsx("p", { className: "mb-4", children: props.para2 }), _jsx("p", { className: "mb-4 font-medium", children: props.para3 }), _jsxs("a", { href: props.link ? props.link : props.videoLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center font-medium hover:underline text-sky-400", children: ["Learn more", _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-5", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) })] }), _jsx("br", {}), _jsx("br", {}), props.videoLink && (_jsx("button", { onClick: () => setCheck((prev) => !prev), className: "bg-[green] hover:bg-[#00df9a] duration-200 text-white font-bold py-2 px-4 rounded", children: check ? "Hide video" : "Load video" }))] }), props.videoLink && check && (_jsx("div", { className: "aspect-video flex flex-col items-start mt-6", children: _jsx("iframe", { className: "rounded-lg w-full h-full", src: props.videoLink, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, loading: "lazy" }) }))] }) }) }));
};
export default ReactNative;
