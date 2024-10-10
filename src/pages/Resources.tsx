import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resource from "../components/Resource"
const Resources: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Resource />
            <Footer />
        </div>
    );
};

export default Resources;