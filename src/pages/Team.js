import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Teams from "../components/TeamsComponent";
import teamsData from "../data/teams.json";
const Team = () => {
    const steeringCouncilData = teamsData.find((item) => "Steering Council" in item) || {};
    const volunteerData = teamsData.find((item) => "Volunteer" in item) || {};
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: "w-full py-[2rem]", children: [_jsx("div", { className: "mx-auto justify-center py-[4rem]", children: _jsx("h1", { className: "text-6xl mb-6 font-bold text-center text-opensource-green", children: "Steering Council" }) }), _jsx("div", { className: "max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8", children: steeringCouncilData["Steering Council"] &&
                            steeringCouncilData["Steering Council"].map((member, index) => (_jsx(Teams, { image: member.image, name: member.name, position: member.position, link: member.link }, index))) }), _jsx("div", { className: "mx-auto justify-center py-[4rem]", children: _jsx("h1", { className: "text-6xl mb-6 font-bold text-center text-opensource-green", children: "Our Volunteers" }) }), _jsx("div", { className: "max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8", children: volunteerData.Volunteer &&
                            volunteerData.Volunteer.map((member, index) => (_jsx(Teams, { image: member.image, name: member.name, position: member.position, link: member.link }, index))) })] }), _jsx(Footer, {})] }));
};
export default Team;
