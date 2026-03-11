import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "tech-dark text-white" : "tech-light text-black"}>

      <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <h1 className="text-3xl font-bold flex items-center gap-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="w-8 h-8"/>
                  Microsoft Club
        </h1>

        <div className="flex gap-8 text-lg font-medium">
          <Link className="hover:text-red-300 transition" to="/">Home</Link>
          <Link className="hover:text-red-300 transition" to="/projects">Projects</Link>
          <Link className="hover:text-red-300 transition" to="/team">Team</Link>
          <Link className="hover:text-red-300 transition" to="/contact">Contact</Link>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>

          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
        </label>

      </nav>

      <div className="min-h-screen flex flex-col">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;