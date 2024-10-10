import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Guide_Element from "../components/Guide_Element";

const Guide: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Guide_Element />
            <Footer />
        </div>
    );
};

export default Guide;
