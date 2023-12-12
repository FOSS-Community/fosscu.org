import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Teams from "../components/TeamsComponent";
import teamsData from "../data/teams.json";

const Team = () => {
  const steeringCouncilData = teamsData.find((item) => "Steering Council" in item) || {};
  const volunteerData = teamsData.find((item) => "Volunteer" in item) || {};

  return (
    <div>
      <Navbar />
      <div className="w-full py-[2rem]">
        {/* Steering Council Section */}
        <div className="mx-auto justify-center py-[4rem]">
          <h1 className="text-6xl mb-6 font-bold text-center text-opensource-green">
            Steering Council
          </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
          {steeringCouncilData["Steering Council"] && steeringCouncilData["Steering Council"].map((member, index) => (
            <Teams
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              link={member.link}
            />
          ))}
        </div>

        {/* Volunteer Section */}
        <div className="mx-auto justify-center py-[4rem]">
          <h1 className="text-6xl mb-6 font-bold text-center text-opensource-green">
            Our Volunteers
          </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {volunteerData.Volunteer && volunteerData.Volunteer.map((member, index) => (
            <Teams
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              link={member.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
