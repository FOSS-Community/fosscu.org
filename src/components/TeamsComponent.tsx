import React from "react";
import { FaLink } from "react-icons/fa";

interface TeamsComponentProps {
  image: string;
  name: string;
  position: string;
  link: {
    url: string;
    target?: string;
    rel?: string;
  };
}

const TeamsComponent: React.FC<TeamsComponentProps> = (props) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white profile_pic"
        src={props.image}
        alt={props.name}
      />
      <h2 className="text-2xl font-bold text-center py-8 text-white">
        {props.name}
      </h2>
      <p className="text-center text-1xl font-bold text-white">
        {props.position}
      </p>
      <div className="flex justify-center mx-auto md:w-[50%] my-6 px-6 py-3">
        <a href={props.link.url} target={props.link.target} rel={props.link.rel}>
          <FaLink size={30} color="white" />
        </a>
      </div>
    </div>
  );
};

export default TeamsComponent;
