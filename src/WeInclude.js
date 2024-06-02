import React from "react";
import group888 from './images/Group 888.png';
import group887 from './images/Group 887.png';
import vector from './images/Vector.png';
import groupStudents from './images/🦆 icon _group students_.png';

const WeInclude = () => {
  return (
    <div>
        <div className="font-bold text-5xl text-white text-center flex flex-col mb-9" >We Include</div>
            <div className="flex justify-center items-center">
                <ul className="flex flex-wrap justify-center md:justify-around items-center gap-6 md:gap-12 w-full max-w-screen-xl mb-[50px] ">
                    <li className="font-extrabold text-3xl tracking-tight items-center gap-2 flex text-[#AFAFAF] "><img src={group888} alt="Developers" className="w-[30px] h-[30px]" />
                        Developers
                    </li>
                    <li className="font-extrabold text-3xl tracking-tight items-center gap-2 flex text-[#AFAFAF] "><img src={group887} alt="Designers" className="w-[30px] h-[30px]" />
                        Designers
                    </li>
                    <li className="font-extrabold text-3xl tracking-tight items-center gap-2 flex text-[#AFAFAF] "><img src={vector} alt="Students" className="w-[30px] h-[25.93px]" />
                        Students
                    </li>
                    <li className="font-extrabold text-3xl tracking-tight items-center gap-2 flex text-[#AFAFAF] "><img src={groupStudents} alt="Creative Individuals" className="w-[30px] h-[26.22px]" />
                        Creative Individuals
                    </li>
                </ul>
            </div>
    </div>
  );
};

export default WeInclude;
