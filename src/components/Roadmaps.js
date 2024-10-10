import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Roadmaps = (props) => {
    return (_jsx("div", { children: _jsx("div", { className: "details-section z-10 lg:ml-80 ", children: _jsx("section", { className: "", children: _jsxs("div", { className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6", children: [_jsxs("div", { className: "max-w-screen-lg sm:text-lg text-gray-100", children: [_jsx("h2", { className: "text-4xl mb-12 tracking-tight font-bold text-white", children: props.head }), _jsx("p", { className: "mb-4", children: props.para1 }), _jsx("p", { className: "mb-4", children: props.para2 }), _jsx("p", { className: "mb-4 font-medium", children: props.para3 }), _jsxs("a", { href: props.link ? props.link : props.videoLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center font-medium hover:underline hover:text-primary-800 text-primary-700", children: ["Learn more", _jsx("svg", { className: "ml-1 w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) })] })] }), props.videoLink ? (_jsx("div", { className: "aspect-video flex flex-col items-start mt-6", children: _jsx("iframe", { className: "rounded-lg w-full h-full", src: props.videoLink, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, loading: "lazy" }) })) : null] }) }) }) }));
};
export default Roadmaps;
