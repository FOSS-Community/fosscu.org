import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HTML_CSS from "../../components/Frontend_files/HTML_CSS";
import htmlData from "../../data/Front_end/htcs.json";


const HTMLCSS = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <p className=" text-5xl mx-auto max-w-screen-xl lg:py-8 lg:px-6 mt-10 font-bold font-sans tracking-tight text-white">HTML and CSS Resources :</p>
            <div class="border-b border-gray-300 my-2 mx-auto max-w-screen-xl mb-12 lg:px-6"></div>
            {htmlData.map((htcs) => (
                <HTML_CSS
                    head={htcs.head}
                    para1={htcs.para1}
                    para2={htcs.para2}
                    para3={htcs.para3}
                    link={htcs.link}
                    videoLink={htcs.videoLink}
                    image={htcs.image}
                />
            ))}
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default HTMLCSS;