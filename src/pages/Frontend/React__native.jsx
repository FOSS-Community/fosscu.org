import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reactnative from "../../components/Frontend_files/Reactnative";
import react_nativeData from "../../data/Front_end/react_native.json";


const React__native = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <p className=" text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">React Native Learning Resources:</p>
            <div class="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            {react_nativeData.map((react_native) => (
                <Reactnative
                    head={react_native.head}
                    para1={react_native.para1}
                    para2={react_native.para2}
                    para3={react_native.para3}
                    link={react_native.link}
                    videoLink={react_native.videoLink}
                    image={react_native.image}
                />
            ))}
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default React__native;