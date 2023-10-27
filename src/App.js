import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Publications from "./components/Publications";
import Cv from "./components/Cv";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
