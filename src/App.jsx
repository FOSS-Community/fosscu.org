import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import About from "./pages/AboutOrg";
import Buiding from "./pages/Buiding";
import ReactDOM from "react-dom/client";
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
import RedirectConf from "./components/RedirectToConf";

// import About from './components/About'
// import AboutOrg from "./pages/AboutOrg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectConf />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/building" element={<Buiding />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        <Route path="/faq" element={<Faqs />}></Route>
        <Route path="/resource" element={<Resources />}></Route>
        <Route path="/privacypolicy" element={<Privacy />}></Route>
        <Route path="/frontend" element={<Frontends />}></Route>
        <Route path="/html_css" element={<HTMLCSS />}></Route>
        <Route path="/javascript" element={<JS />}></Route>
        <Route path="/electron" element={<Eletron />}></Route>
        <Route path="/reactjs" element={<Reactjs />}></Route>
        <Route path="/nextjs" element={<Next__js />}></Route>
        <Route path="/tailwind" element={<Tail_wind />}></Route>
        <Route path="/vuejs" element={<Vue__js />}></Route>
        <Route path="/threejs" element={<Three__js />}></Route>
        <Route path="/reactnative" element={<React__native />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Navbar />
<Hero />
<About />
<Newsletter/> */
}
