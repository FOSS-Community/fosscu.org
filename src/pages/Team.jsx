import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Teams from "../components/TeamsComponent";
import teamsData from "../data/teams.json";


const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full py-[2rem]">
        <div className="mx-auto justify-center py-[4rem]">
          <h1 className="text-6xl mb-6 font-bold text-center text-opensource-green">
            Our Volunteers{" "}
          </h1>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {teamsData.map((team) => (
            <Teams
              image={team.image}
              name={team.name}
              position={team.position}
              link={team.link}
            />
          ))};
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
