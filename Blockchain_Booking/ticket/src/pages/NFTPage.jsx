import React from "react";

const NFTPage = () => {
  const nftCollection = [
    {
      name: "CryptoPunk #5822",
      description: "One of the rarest CryptoPunks, sold for $23.7M.",
      image:
        "https://media.istockphoto.com/id/1419107197/photo/nft-icon-image-and-crypto-coin-3d-rendering.jpg?b=1&s=612x612&w=0&k=20&c=BMQW_r2eNiGuKmEEKmRMYNfmT8JBHTDptHNHuFfWNwc=",
      price: "$23.7M",
      creator: "Larva Labs",
    },
    {
      name: "Bored Ape Yacht Club #8817",
      description: "From the Bored Ape collection, sold for $3.4M.",
      image:
        "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$3.4M",
      creator: "Yuga Labs",
    },
    {
      name: "Beeple's Everydays: The First 5000 Days",
      description: "Digital artwork by Beeple, sold for $69.3M.",
      image:
        "https://images.pexels.com/photos/6781340/pexels-photo-6781340.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$69.3M",
      creator: "Beeple",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 min-h-screen py-10 px-6">
      <h1 className="text-center text-white text-4xl font-bold mb-8">
        Explore Our Exclusive NFT Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nftCollection.map((nft, index) => (
          <div
            key={index}
            className="bg-gray-900 border-white border-2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-2">{nft.name}</h2>
              <p className="text-white mb-4">{nft.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-bold">Price: {nft.price}</span>
                <span className="text-white">Creator: {nft.creator}</span>
              </div>
              <a
                href="https://www.phonepe.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white mt-4 p-2 rounded">
                  Buy NFT
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTPage;
