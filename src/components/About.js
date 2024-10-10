import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Lottie from "react-lottie"; // or from "react-lottie-player" if you're using that
import animationData from "../assets/lotties/community_about_lottie.json";
const About = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, []);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (_jsx("div", { className: "w-full bg-white py-16 px-4", children: _jsxs("div", { className: "max-w-[1240px] mx-auto grid md:grid-cols-2", children: [size >= 700 ? (_jsxs("div", { className: "w-[500px] mx-auto my-4", children: [" ", _jsx(Lottie, { options: defaultOptions, height: 400, width: 400 })] })) : (""), _jsxs("div", { className: "flex flex-col justify-center", children: [_jsx("p", { className: "text-[#AEF746] font-bold", children: "Community + Coding = \uD83D\uDD25" }), _jsx("h1", { className: "md:text-4xl sm:text-3xl text-2xl font-bold py-3", children: "We \u2764\uFE0F Open Source" }), _jsx("p", { children: "We at FOSSCU (Free and Open-Source Software Community United) are a group of individuals who are constantly working to promote Open-Source Culture." }), _jsx("a", { href: "https://linktr.ee/fosscu", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "hover:bg-slate-800 bg-black text-[#0DFF1C] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3", children: "Connect with Us \uD83C\uDFC1" }) })] })] }) }));
};
export default About;
