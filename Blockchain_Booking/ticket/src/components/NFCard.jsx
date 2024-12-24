import React from 'react';

const NFCard = ({ data }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-8 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-xl text-center">
      <h3 className="text-3xl font-extrabold mb-6">Your NFT Ticket</h3>
      <p className="text-2xl mb-4">Transport: {data.transport}</p>
      <p className="text-2xl mb-4">Pickup Location: {data.pickup}</p>
      <p className="text-2xl mb-4">Drop Location: {data.drop}</p>
      <p className="text-2xl mb-4">Date: {data.date}</p>
      <p className="text-2xl mb-6">Tickets: {data.ticketCount}</p>
      {/* NFT ID in the center with larger text */}
      <p className="text-4xl font-bold text-center text-yellow-300 mb-6">{data.nftId}</p>
    
    </div>
  );
};

export default NFCard;
