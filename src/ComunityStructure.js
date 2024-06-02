import React from "react";

const ComunityStructure = () => {
  return (
    <div>
         <div className="font-bold sm:text-6xl text-4xl tracking-tighter text-center text-[#FFFFFF] sm:mb-[150px] mb-[100px]">
                The Community Structure
            </div>
            <div className="text-center flex justify-center items-center mb-5">
                <div className="sm:w-[1134px] sm:h-[801px] bg-white/[0.08] sm:rounded-[30px] flex flex-col items-center text-white">
                    <div className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl w-full max-w-2xl mt-5">
                        “with great power, comes great responsibilities”
                    </div>
                        <div className="flex justify-center lg:gap-20 gap-5 lg:mt-[108px] md:mt-[122px] sm:mt-[130px] mt-[100px] items-end mb-0">
                            <div className="sm:w-[160px] w-[100px] h-[104px] sm:h-[168px] bg-[#FAFF00] text-[#000000] font-medium sm:text-2xl flex justify-center items-center">
                                Learner
                            </div>
                            <div className="sm:w-[160px] w-[100px] h-[280px] sm:h-[576px] bg-[#FAFF00] text-[#000000] font-medium sm:text-2xl flex justify-center items-center">
                                Maintainer
                            </div>
                            <div className="sm:w-[160px] w-[100px] h-[200px] sm:h-[322px] bg-[#FAFF00] text-[#000000] font-medium sm:text-2xl flex justify-center items-center">
                                Contributor
                            </div>
                        </div>
                </div>   
            </div>
            <div className="font-light text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] text-center lg:mb-[150px] mb-[80px]">
                Read our docs for a much detailed information.
            </div>
    </div>
  );
};

export default ComunityStructure;
