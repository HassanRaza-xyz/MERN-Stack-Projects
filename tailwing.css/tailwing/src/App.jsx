// src/App.jsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import HomePage from "./PAges/Home.jsx";
import Details from "./Pages/details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
