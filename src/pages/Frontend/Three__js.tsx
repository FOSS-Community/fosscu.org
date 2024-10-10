import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Three_js from "../../components/Frontend_files/Three_js";
import threejsData from "../../data/Front_end/threejs.json";

// Define the interface for the threejsData items
interface ThreeJSData {
    head: string;
    para1: string;
    para2?: string; // Optional field
    para3?: string; // Optional field
    link?: string; // Optional field
    videoLink?: string; // Optional field
    image?: string; // Optional field
}

const Three__js: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                Three.js Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure threejsData is typed correctly as an array of ThreeJSData */}
            {threejsData.map((threejs: ThreeJSData, index: number) => (
                <Three_js
                    key={index} // Add key for each item
                    head={threejs.head}
                    para1={threejs.para1}
                    para2={threejs.para2 || ""} // Handle optional para2
                    para3={threejs.para3 || ""} // Handle optional para3
                    link={threejs.link || ""} // Handle optional link
                    videoLink={threejs.videoLink || ""} // Handle optional videoLink
                />
            ))}
            <Footer />
        </div>
    );
};

export default Three__js;
