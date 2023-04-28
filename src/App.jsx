import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Team from "./pages/Team"
import Contacts from "./pages/Contacts"
import About from "./pages/AboutOrg";
import Buiding from "./pages/Buiding";
import ReactDOM from "react-dom/client";
import Guide from "./pages/Guide";
import Faqs from "./pages/Faqs";
import Resources from "./pages/Resources";

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
        <Route path="/building" element={<Buiding/>}></Route>
        <Route path="/guide" element={<Guide/>}></Route>
        <Route path="/faq" element={<Faqs/>}></Route>
        <Route path="/resource" element={<Resources/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Navbar />
<Hero />
<About />
<Newsletter/> */}