import React from 'react'
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Cards from "../components/Cards"

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Newsletter/>
        {/* <Cards/> */}
        <Footer/>
    </div>
  )
}

export default Homepage