import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Team from "./pages/Team"
import Contacts from "./pages/Contacts"
import About from "./pages/AboutOrg";
import ReactDOM from "react-dom/client";
// import About from './components/About'
// import AboutOrg from "./pages/AboutOrg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contacts/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Navbar />
<Hero />
<About />
<Newsletter/> */}