import { Home } from 'lucide-react'
import React from 'react'
import ParticlesComponent from './Components/ParticlesComponent'
import ScrollEffect from './Components/Hori'
import Aboutus from './Components/Aboutus'
import Features from './Components/Features'
import AIChatBot from './Components/AIChatBot'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

export default function Homepage() {
  return (
    <div>
      <Home />
      <ParticlesComponent id="particles" />

      
      <ScrollEffect />


      <Aboutus />
      <Features />
      <AIChatBot />
      {/* <LiveEmotion /> */}
      <ContactUs />
      <Footer />
    </div>
  )
}
