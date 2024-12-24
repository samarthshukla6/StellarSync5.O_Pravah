import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling
import { Contact } from 'lucide-react';

export default function Aboutus() {
  return (
    <>
      <div className=" " id='about'>
        {/* Flex container for the card and alerts */}
        <h1 className='text-5xl font-bold text-center text-white mt-10'>About us</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-14 mt-10 mb-3 ml-10 lg:ml-28">
          
          {/* Left side card */}
          <div className="w-full lg:w-[600px] h- duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50  flex flex-col justify-evenly content-fit">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-2xl font-bold">TravelX-AI</span>
              <p>At TravelX, we are reimagining the way people experience travel and transportation. Founded with a vision to make every journey seamless, secure, and personalized, our platform combines cutting-edge technologies like AI, IoT, and blockchain to tackle the industry's most pressing challenges.  
                <br/>
                <br/>

                We understand the frustrations of lost connectivity in remote areas, overcrowded public transport, and impersonal travel services. That’s why we’ve built innovative solutions, from offline navigation and real-time crowd monitoring to blockchain-secured bookings and AI-driven recommendations, to empower travelers with convenience, safety, and peace of mind.  
<br/>
<br/>
At the heart of TravelX is a commitment to innovation and empathy. Whether you’re navigating unknown terrains, ensuring the safety of loved ones, or simply seeking a more enjoyable travel experience, TravelX is your trusted companion. Join us as we transform travel into a journey of ease, joy, and endless possibilities.  
<br/>
<br/>
TravelX – Your Journey, Redefined.
              </p>
            </div>
          </div>

          {/* Right side alerts with increased width */}
          <div className='w-[600px]   h-[500px] duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly'>
            <img src="about.webp" alt=""/>
          </div>
        </div>
        
        


      </div>
    </>
  );
}
