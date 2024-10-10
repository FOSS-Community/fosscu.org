import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HTML_CSS from "../../components/Frontend_files/HTML_CSS";
import htmlData from "../../data/Front_end/htcs.json";

// Define the interface for the data type of each item in htmlData
interface HtmlCssData {
    head: string;
    para1: string;
    para2?: string;
    para3?: string;
    link?: string; // Optional
    videoLink: string;
    image?: string; // Optional
}

const HTMLCSS: React.FC = () => {
    return (
        <div>
            <Navbar />
            <p className="text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">
                HTML and CSS Resources:
            </p>
            <div className="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>

            {/* Ensure htmlData is correctly typed as an array of HtmlCssData */}
            {htmlData.map((htcs: HtmlCssData) => (
                <HTML_CSS
                    key={htcs.head}
                    head={htcs.head}
                    para1={htcs.para1}
                    para2={htcs.para2 || ""}
                    para3={htcs.para3 || ""}
                    link={htcs.link || "#"} // Default link if undefined
                    videoLink={htcs.videoLink}
                
                />
            ))}

            <Footer />
        </div>
    );
};

export default HTMLCSS;
