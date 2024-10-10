import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Javascript from "../../components/Frontend_files/Javascript";
import jsData from "../../data/Front_end/JS.json";

// Define the interface for each item in jsData
interface JsData {
    head: string;
    para1: string;
    para2?: string; // Optional
    para3?: string; // Optional
    link: string;
    videoLink?: string; // Optional since not all entries have videoLink
}

const JSc: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                JavaScript Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure jsData is correctly typed as an array of JsData */}
            {jsData.map((JS: JsData, index: number) => (
                <Javascript
                    key={index} // Provide a unique key
                    head={JS.head}
                    para1={JS.para1}
                    para2={JS.para2 || ""} // Handle optional para2 and para3
                    para3={JS.para3 || ""}
                    link={JS.link}
                    videoLink={JS.videoLink || ""} // Handle optional videoLink
                />
            ))}

            <Footer />
        </div>
    );
};

export default JSc;
