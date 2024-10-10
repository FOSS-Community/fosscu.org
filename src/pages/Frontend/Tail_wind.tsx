import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tailwindd from "../../components/Frontend_files/Tailwindd";
import tailwindData from "../../data/Front_end/tailwind.json";

// Define the interface for the tailwindData items
interface TailwindData {
    head: string;
    para1: string;
    para2?: string; // Optional field
    para3?: string; // Optional field
    link?: string; // Optional field
    videoLink?: string; // Optional field
    image?: string; // Optional field
}

const Tail_wind: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                Tailwind Learning Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            
            {/* Ensure tailwindData is typed correctly as an array of TailwindData */}
            {tailwindData.map((tailwind: TailwindData, index: number) => (
                <Tailwindd
                    key={index} // Add key for each item
                    head={tailwind.head}
                    para1={tailwind.para1}
                    para2={tailwind.para2 || ""} // Handle optional para2
                    para3={tailwind.para3 || ""} // Handle optional para3
                    link={tailwind.link || ""} // Handle optional link
                    videoLink={tailwind.videoLink || ""} // Handle optional videoLink
                />
            ))}
            <Footer />
        </div>
    );
};

export default Tail_wind;
