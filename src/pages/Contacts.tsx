import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
const Contacts: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

export default Contacts;