import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/team" element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Navbar />
<Hero />
<About />
<Newsletter/> */}