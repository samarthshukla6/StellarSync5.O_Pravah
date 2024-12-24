// import React from 'react'
// import TicketBooking from '../components/TicketBooking'

// export default function TicketPage() {
//   return (
//     <div className='py-5  w-screen h-auto bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 overflow-x-hidden'>
//       <TicketBooking />
//     </div>
//   )
// }



import React, { useState } from 'react';
import TicketBooking from '../components/TicketBooking';
import NFCard from '../components/NFCard';
export default function TicketPage() {
  const [showNFTCard, setShowNFTCard] = useState(false);
  const [formData, setFormData] = useState({});

  const generateNFTId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nftId = '';
    for (let i = 0; i < 8; i++) {
      nftId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return nftId;
  };

  const handleFormSubmit = (data) => {
    setFormData({ ...data, nftId: generateNFTId() });
    setShowNFTCard(true);
  };

  return (
    <div className="py-5 w-screen h-auto bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 overflow-x-hidden">
      <TicketBooking onFormSubmit={handleFormSubmit} />
      {showNFTCard && <NFCard data={formData} />}
    </div>
  );
}
