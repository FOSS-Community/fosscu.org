import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reactt from "../../components/Frontend_files/Reactt";
import reactData from "../../data/Front_end/react.json";

// Define the interface for the reactData items
interface ReactData {
    head: string;
    para1: string;
    para2?: string; // Optional field
    para3?: string; // Optional field
    link?: string; // Optional field
    videoLink?: string; // Optional field
    image?: string; // Optional field
}

const Reactjs: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                React Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure reactData is typed correctly as an array of ReactData */}
            {reactData.map((react: ReactData, index: number) => (
                <Reactt
                    key={index} // Add key for each item
                    head={react.head}
                    para1={react.para1}
                    para2={react.para2 || ""} // Handle optional para2
                    para3={react.para3 || ""} // Handle optional para3
                    link={react.link || ""} // Handle optional link
                    videoLink={react.videoLink || ""} // Handle optional videoLink
                />
            ))}
            <Footer />
        </div>
    );
};

export default Reactjs;
