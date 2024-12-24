import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TicketBooking from './components/TicketBooking';// Correct import
import NFTCard from './components/NFTCard';
import TouristPlaceCard from './components/TouristPlaceCard';
import TouristPlacesPage from './pages/TouristPlacesPage';
import NFTPage from './pages/NFTPage';
import TicketPage from './pages/TicketPage';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/nft" element={<NFTPage />} />
          <Route path="/tourist-places" element={<TouristPlacesPage/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
