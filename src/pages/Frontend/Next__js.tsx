import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Next_js from "../../components/Frontend_files/Next_js";
import nextjsData from "../../data/Front_end/nextjs.json";

// Define the interface for the nextjsData items
interface NextJsData {
    head: string;
    para1: string;
    para2?: string; // Optional
    para3?: string; // Optional
    link?: string; // Optional, since some objects don't have the link
    videoLink?: string; // Optional
    image?: string; // Optional, in case some items may not have an image
}

const Next__js: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                Next.js Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure nextjsData is correctly typed as an array of NextJsData */}
            {nextjsData.map((nextjs: NextJsData, index: number) => (
                <Next_js
                    key={index} // Always provide a unique key
                    head={nextjs.head}
                    para1={nextjs.para1}
                    para2={nextjs.para2 || ""} // Handle optional para2
                    para3={nextjs.para3 || ""} // Handle optional para3
                    link={nextjs.link || ""} // Handle optional link
                    videoLink={nextjs.videoLink || ""} // Handle optional videoLink
                />
            ))}
            
            <Footer />
        </div>
    );
};

export default Next__js;
