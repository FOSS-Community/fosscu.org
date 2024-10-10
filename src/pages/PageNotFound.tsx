import React from 'react';
import { Link } from "react-router-dom";
import DinoGame from 'react-chrome-dino-ts';
import 'react-chrome-dino-ts/index.css';

const PageNotFound: React.FC = () => {
  return (
    <div className="flex text-white flex-col items-center justify-center p-10">
      <DinoGame />
      <p className="font-bold md:text-3xl sm:text-2xl text-xl p-4 text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="inline-block">
        <button className="hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[60px] rounded-md font-medium text-black">
          GO BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
