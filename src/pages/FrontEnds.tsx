import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Frontend from "../components/frontend"
const Frontends: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Frontend />
            <Footer />
        </div>
    );
};

export default Frontends;