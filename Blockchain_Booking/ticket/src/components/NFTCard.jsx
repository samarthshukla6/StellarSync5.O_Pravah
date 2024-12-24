import React from 'react';

const NFTCard = ({ nft }) => {
  const sendEmail = () => {
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nftName: nft.name,
        nftDescription: nft.description,
        recipientEmail: 'recipient@example.com',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <div className="nft-card p-4 bg-gray-900 border-white border-2 rounded-md shadow-lg">
      <img src={nft.image} alt={nft.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-4 text-xl font-semibold">{nft.name}</h3>
      <p className="text-white">{nft.description}</p>
      <button
        className="bg-blue-600 text-white mt-4 p-2 rounded"
        onClick={sendEmail}
      >
        Buy NFT
      </button>
    </div>
  );
};

export default NFTCard;
