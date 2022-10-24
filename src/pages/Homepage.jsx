import React from 'react'
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Newsletter/>
    </div>
  )
}

export default Homepage