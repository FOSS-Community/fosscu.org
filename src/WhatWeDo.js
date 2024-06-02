import React from "react";
import conf1 from './images/conf 1.png';
import shipyard1 from './images/Shipyard 1.png';
import shipyard2 from './images/Shipyard(1) 1.png';

const WhatWeDo = () => {
  return (
    <div>
        <div className="font-bold text-5xl tracking-tighter text-center text-white mb-24">What we do?</div>
            <div className="flex items-center justify-center mb-24">
                <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-0 w-[1350px]">
                    <div className="flex flex-col sm:w-[423.23px] sm:h-[512px] w-[300px] bg-[#ffffff]/[0.08] rounded-[20px] space-x-[25px] justify-center">
                        <div className="flex items-center justify-center mb-[10px]">
                            <div className="overflow-hidden rounded-[20px]">
                                <img src={conf1} alt="FOSSCUConf" className="object-cover transition-transform duration-700 hover:scale-110 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="font-bold text-[40px] text-[#FEFEFE] flex ">
                            FOSSConf
                        </div>
                        <div className="font-semibold text-[#FEFEFE] tracking-tighter text-2xl text-left leading-10 mb-[40px]">
                            Annual open source conference organized by FOSSCU
                        </div>
                        <div className="bg-[#000000] w-[194px] h-[60px] text-[#ffffff] rounded-[15px] flex justify-center items-center  transition-transform duration-300 cursor-pointer hover:bg-[#000000]/[0.6] hover:text-[#ffffff]/[0.8]">
                            Learn More
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-[423.23px] sm:h-[512px] w-[300px] bg-[#ffffff]/[0.08] rounded-[20px] xl:mt-[182px] mt-[40px] mb-[40px] space-x-[25px] justify-center">
                        <div className="flex items-center justify-center mb-[10px] ">
                            <div className="overflow-hidden rounded-[20px]">
                                <img src={shipyard1} alt="shipyard" className="object-cover transition-transform duration-700 hover:scale-110 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="font-bold text-[40px] text-[#FEFEFE] flex ">
                            Shipyard
                        </div>
                        <div className="font-semibold text-[#FEFEFE] tracking-tighter text-2xl text-left leading-10 mb-[40px]">
                            Build and ship every other weekend with us. Just Ship it 🚀🚀🚀
                        </div>
                        <div className="bg-[#000000] w-[194px] h-[60px] text-[#ffffff] rounded-[15px] flex justify-center items-center  transition-transform duration-300 cursor-pointer hover:bg-[#000000]/[0.6] hover:text-[#ffffff]/[0.8]">
                            Learn More
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-[423.23px] sm:h-[512px] w-[300px]  bg-[#ffffff]/[0.08] rounded-[20px] space-x-[25px]  justify-center">
                        <div className="flex items-center justify-center mb-[10px]">
                            <div className="overflow-hidden rounded-[20px]">
                                <img src={shipyard2} alt="open-mic" className="object-cover transition-transform duration-700 hover:scale-110 cursor-pointer"/>
                            </div>
                        </div>
                        <div className="font-bold text-[40px] text-[#FEFEFE] flex ">
                            Open-mic
                        </div>
                        <div className="font-semibold text-[#FEFEFE] tracking-tighter text-2xl text-left leading-10 mb-[40px]">
                            We host Open-mic sessions every other weekend at FOSSCU-K.
                        </div>
                        <div className="bg-[#000000] w-[194px] h-[60px] text-[#ffffff] rounded-[15px] flex justify-center items-center transition-transform duration-300 each-in-out  hover:bg-[#000000]/[0.6] hover:text-[#ffffff]/[0.8] cursor-pointer">
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default WhatWeDo;
