import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from "./Pages/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";


function App() {
  return (
    <BrowserRouter>
     <div className="layout">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
