import { useState } from "react";

import React from "react";
import Home from "./Components/Home";
import ScrollEffect from "./Components/Hori";
// import Features from "./Components/Features";
import Aboutus from "./Components/Aboutus";
import ContactUs from "./Components/ContactUs";
import ParticlesComponent from "./Components/ParticlesComponent";
import Footer from "./Components/Footer";
import AIChatBot from "./Components/AIChatBot";
import LiveEmotion from "./Components/LiveEmotion";
import { AuroraHero } from "./Components/AuroraHero";
import Features from "./Components/Featuress";

function App() {
  return (
    <>
      <Home />
      <ParticlesComponent id="particles" />
      <ScrollEffect />

      <Aboutus />
      <Features/>
      <AIChatBot />
      <ContactUs />
      <Footer />
      {/* <LiveEmotion /> */}
      {/* <AuroraHero /> */}
    </>
  );
}

export default App;
