import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
const Privacy: React.FC = () => {
    return (
        <div>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default Privacy;