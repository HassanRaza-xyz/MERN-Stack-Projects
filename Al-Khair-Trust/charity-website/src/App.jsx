import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import Career from './Pages/Career';
import Blogz from './Pages/blog';
import Contact from "./Pages/contact";
import Project from "./Pages/project";
import Aimz from "./Pages/aim";
import AFaq from "./Pages/faq";
import Afom from "./Pages/adform";
import './App.css';

function App() {
  return (
        <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/blog" element={<Blogz />} />
            <Route path="/blog" element={<Blogz />} />
      <Route path="/contact" element={<Contact/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/aim" element={<Aimz/>} />
            <Route path="/faq" element={<AFaq/>} />
            <Route path="/adform" element={<Afom/>} />



    </Routes>
        </BrowserRouter>

  );
}

export default App;
