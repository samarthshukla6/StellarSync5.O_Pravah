import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css"; // Ensure your existing styles are imported

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="main-hero-gradient-box relative z-0">
        <nav
          id="nav"
          className="sticky top-4 z-50 mx-auto flex w-full max-w-[1320px] items-center justify-between p-4 backdrop-blur-lg shadow-lg"
        >
          <div className="text-white font-bold text-xl">
            <a href="#home">TravelX-AI</a>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`md:flex md:items-center ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <a
              href="#home"
              className="mx-4 text-white font-semibold hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="mx-4 text-white font-semibold hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#features"
              className="mx-4 text-white font-semibold hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#contact"
              className="mx-4 text-white font-semibold hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#download"
              className="mx-4 text-white font-semibold hover:text-white transition-colors duration-300"
            >
              
            </a>
          </div>
        </nav>

        <div id="heroSection" className="px-6 py-10 lg:py-20 gap-4">
          <div className="mt-24 text-center gap-4">
            <h1 className="main-heading text-5xl sm:text-4xl lg:text-[60px] text-white font-bold ">
            TravelX(AI)
              <br />
              {/* <span className="gradient-text mt-12">Your crisis manager</span> */}
            </h1>
            <span className="gradient-text mt-12">Your Travel Manager</span>
            <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl">
            The all-in-one platform for efficient travel  management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
