import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">TravelX-AI NFT</h1>
        <nav className='text-white'>
          <Link to="/" className="mx-4 text-white">Home</Link>
          <Link to="/tickets" className="mx-4 text-white">Tickets</Link>
          <Link to="/nft" className="mx-4 text-white">NFTs</Link>
          <Link to="/tourist-places" className="mx-4 text-white">allotment</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
