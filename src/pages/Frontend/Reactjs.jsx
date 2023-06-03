import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reactt from "../../components/Frontend_files/Reactt";
import reactData from "../../data/Front_end/react.json";


const Reactjs = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <p className=" text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">React Learning Resources :</p>
            <div class="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            {reactData.map((react) => (
                <Reactt
                    head={react.head}
                    para1={react.para1}
                    para2={react.para2}
                    para3={react.para3}
                    link={react.link}
                    videoLink={react.videoLink}
                    image={react.image}
                />
            ))}
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default Reactjs;