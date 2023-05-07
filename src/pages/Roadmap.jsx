import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Roadmaps from "../components/Roadmaps";
import Sidebar from "../components/Sidebar";
import frontendData from "../data/frontend.json";


const Roadmap = () => {

    return (
        <div>
            <div className="lg:ml-80 -mt-2">
                <Navbar />
            </div>
            <Sidebar />
            {frontendData.map((frontend) => (
                <Roadmaps
                    head={frontend.head}
                    para1={frontend.para1}
                    para2={frontend.para2}
                    para3={frontend.para3}
                    link={frontend.link}
                    videoLink={frontend.videoLink}
                    image={frontend.image}
                />
            ))}
            <div className="lg:ml-80 overflow-hidden">
                <Footer />
            </div>
        </div >
    )
}

export default Roadmap;