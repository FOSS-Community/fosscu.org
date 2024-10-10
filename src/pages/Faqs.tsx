import React from "react";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Faqs: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Faq />
            <Footer />
        </div>
    );
};

export default Faqs;
