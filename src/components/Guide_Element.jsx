import React from "react";
import STEP_1 from "../assets/img/guide_icons/STEP_1.png"
import STEP_2 from "../assets/img/guide_icons/STEP_2.png"
import STEP_3 from "../assets/img/guide_icons/STEP_3.png"
import STEP_4 from "../assets/img/guide_icons/STEP_4.png"
const Guide_Element = () => {
    return (
        <div>
            <h1 className="w-full py-16 text-white px-4 text-center text-5xl">Guideline To Contribute</h1>

            <div className='flex flex-wrap justify-center gap-4 md:gap-4 sm:gap-4'>
                <a className='flex flex-col  bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }} href='https://github.com/FOSS-Community/website-fossc'>

                    <img src={STEP_1} alt='' className='w-40 mx-auto mt-4 mb-3' />

                    <h2 className='text-center font-bold text-xl mb-0.5'>STEP 1</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>Go to our Github repository</p>

                </a>

                <div className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }}>

                    <img src={STEP_2} alt='' className='w-25 mx-auto' />

                    <h2 className='text-center font-bold text-xl my-1'>STEP 2</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>Fork the repository to your account</p>

                </div>

                <div className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }}>

                    <img src={STEP_3} alt='' className='w-30 mx-auto' />

                    <h2 className=' text-center font-bold text-xl my-1'>STEP 3</h2>

                    <p className='flex flex-col text-center text-white text-md mb-1 px-16'>Make changes and commit them</p>

                </div>

                <a className='flex flex-col bg-gray-900 rounded-lg text-green-400 hover:bg-green-400 transition-color hover:text-white transition-color' style={{ width: '280px', height: '285px' }} href='https://discord.com/channels/983838934624780288/986650931754053644'>

                    <img src={STEP_4} alt='' className='w-40 mx-auto mt-10 mb-8' />

                    <h2 className='text-center font-bold text-xl my-1'>STEP 4</h2>

                    <p className='flex flex-col text-center text-white text-md px-4'>Discuss the commit with maintainer in Discord</p>

                </a>
            </div>


        </div>

    );
};

export default Guide_Element;