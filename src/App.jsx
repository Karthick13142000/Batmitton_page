import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Warious from "./Pages/Warious/Warious";
import NavigationBar from "./NavBar/NavigationBar";
import "./App.css";
import Contact from "./Pages/Contact Us/Contact";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/warriors" element={<Warious />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
