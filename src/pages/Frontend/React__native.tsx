import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reactnative from "../../components/Frontend_files/Reactnative";
import react_nativeData from "../../data/Front_end/react_native.json";

// Define the interface for the react_nativeData items
interface ReactNativeData {
    head: string;
    para1: string;
    para2?: string; // Optional field
    para3?: string; // Optional field
    link?: string; // Optional field
    videoLink?: string; // Optional field
    image?: string; // Optional field
}

const React__native: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                React Native Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure react_nativeData is typed correctly as an array of ReactNativeData */}
            {react_nativeData.map((react_native: ReactNativeData, index: number) => (
                <Reactnative
                    key={index} // Add key for each item
                    head={react_native.head}
                    para1={react_native.para1}
                    para2={react_native.para2 || ""} // Handle optional para2
                    para3={react_native.para3 || ""} // Handle optional para3
                    link={react_native.link || ""} // Handle optional link
                    videoLink={react_native.videoLink || ""} // Handle optional videoLink
                  
                />
            ))}
            
            <Footer />
        </div>
    );
};

export default React__native;
