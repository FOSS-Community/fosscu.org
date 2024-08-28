import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Shipyard from "./pages/Shipyard";
import About from "./pages/AboutOrg";
import Buiding from "./pages/Buiding";
import Guide from "./pages/Guide";
import Faqs from "./pages/Faqs";
import Resources from "./pages/Resources";
import Privacy from "./pages/Privacy";
import Frontends from "./pages/FrontEnds";
import HTMLCSS from "./pages/Frontend/HTMLCSS";
import JS from "./pages/Frontend/JSc";
import Eletron from "./pages/Frontend/Eletron";
import Reactjs from "./pages/Frontend/Reactjs";
import Next__js from "./pages/Frontend/Next__js";
import Tail_wind from "./pages/Frontend/Tail_wind";
import Vue__js from "./pages/Frontend/Vue__js";
import React__native from "./pages/Frontend/React__native";
import Three__js from "./pages/Frontend/Three__js";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/shipyard" element={<Shipyard />} />
        <Route path="/about" element={<About />} />
        <Route path="/building" element={<Buiding />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/resource" element={<Resources />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/frontend" element={<Frontends />} />
        <Route path="/html_css" element={<HTMLCSS />} />
        <Route path="/javascript" element={<JS />} />
        <Route path="/electron" element={<Eletron />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/nextjs" element={<Next__js />} />
        <Route path="/tailwind" element={<Tail_wind />} />
        <Route path="/vuejs" element={<Vue__js />} />
        <Route path="/threejs" element={<Three__js />} />
        <Route path="/reactnative" element={<React__native />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;