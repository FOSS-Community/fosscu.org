import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Vue_js from "../../components/Frontend_files/Vue_js";
import vuejsData from "../../data/Front_end/vuejs.json";

// Define the interface for the vuejsData items
interface VueJSData {
    head: string;
    para1: string;
    para2?: string; // Optional field
    para3?: string; // Optional field
    link?: string; // Optional field
    videoLink?: string; // Optional field
    image?: string; // Optional field
}

const Vue__js: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                Vue.js Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure vuejsData is typed correctly as an array of VueJSData */}
            {vuejsData.map((vuejs: VueJSData, index: number) => (
                <Vue_js
                    key={index} // Add key for each item
                    head={vuejs.head}
                    para1={vuejs.para1}
                    para2={vuejs.para2 || ""} // Handle optional para2
                    para3={vuejs.para3 || ""} // Handle optional para3
                    link={vuejs.link || ""} // Handle optional link
                    videoLink={vuejs.videoLink || ""} // Handle optional videoLink 
                />
            ))}
            <Footer />
        </div>
    );
};

export default Vue__js;
