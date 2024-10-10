import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Lottie from "react-lottie"; // Ensure @types/react-lottie is installed
import animationData from "../assets/lotties/community_animation_lottie.json";
const Homepage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Newsletter, {}), _jsx("div", { className: "flex justify-center my-8", children: _jsx(Lottie, { options: defaultOptions, height: 300, width: 300 }) }), _jsx(Footer, {})] }));
};
export default Homepage;
