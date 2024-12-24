import React, { useState } from 'react';
import NFTCard from '../components/NFTCard';
import TouristPlaceCard from '../components/TouristPlaceCard';
import { Link } from 'react-router-dom';
import { FaBitcoin, FaAirbnb, FaTicketAlt } from 'react-icons/fa'; // Correctly importing icons

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [modalData, setModalData] = useState(null);

  const nftData = [
    {
      name: "CryptoPunk #5822",
      description: "One of the rarest CryptoPunks, sold for $23.7M.",
      image: "https://media.istockphoto.com/id/1419107197/photo/nft-icon-image-and-crypto-coin-3d-rendering.jpg?b=1&s=612x612&w=0&k=20&c=BMQW_r2eNiGuKmEEKmRMYNfmT8JBHTDptHNHuFfWNwc=",
    },
    {
      name: "Bored Ape Yacht Club #8817",
      description: "From the Bored Ape collection, sold for $3.4M.",
      image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Beeple's Everydays: The First 5000 Days",
      description: "Digital artwork by Beeple, sold for $69.3M.",
      image: "https://images.pexels.com/photos/6781340/pexels-photo-6781340.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const touristPlaces = [
    {
      name: "Eiffel Tower, Paris",
      description: "Iconic symbol of France, known for its stunning views of Paris.",
      image: "https://images.pexels.com/photos/29875088/pexels-photo-29875088/free-photo-of-scenic-urban-view-of-dalat-with-radio-tower.jpeg?auto=compress&cs=tinysrgb&w=800",
      travelDetails: {
        charges: "$1,500 - $2,500 (round trip from major international cities)",
        travelMethods: "Fly to Charles de Gaulle Airport, then take a train or taxi to the Eiffel Tower.",
      },
    },
    {
      name: "Grand Canyon, USA",
      description: "A natural wonder, famous for its layered red rocks and vast size.",
      image: "https://images.pexels.com/photos/29752279/pexels-photo-29752279/free-photo-of-anitkabir-wall-relief-with-strollers-in-ankara.jpeg?auto=compress&cs=tinysrgb&w=800",
      travelDetails: {
        charges: "$500 - $1,000 (domestic flights); $1,200 - $2,000 (international flights)",
        travelMethods: "Fly to Phoenix Sky Harbor Airport, then rent a car or take a guided tour to the Grand Canyon.",
      },
    },
    {
      name: "Taj Mahal, India",
      description: "A UNESCO World Heritage site and symbol of love, built in the 17th century.",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      travelDetails: {
        charges: "₹5,000 - ₹15,000 (domestic flights); $700 - $1,500 (international flights)",
        travelMethods: "Fly to Indira Gandhi International Airport in Delhi, then take a train or taxi to Agra.",
      },
    },
  ];

  const openModal = (place) => {
    setModalData(place); // Set the place details to the modal data
  };

  const closeModal = () => {
    setModalData(null); // Reset modal data to close the modal
  };

  return (
    <div className="text-white p-8">
      {/* Welcome Section */}
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Booking Platform</h1>
        <Link to='/tickets'>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
            Book Now <FaTicketAlt className="inline ml-2" />
          </button>
        </Link>
      </section>

      {/* Left Section with 3 Rectangular Boxes and Image on the Right */}
      <section className="flex flex-wrap justify-between my-4">
        {/* Left Side: Rectangular Boxes */}
        <div className="w-full md:w-[48%] space-y-4">
          <div className="bg-gray-700 h-32 rounded-md p-4 flex items-center">
            <FaAirbnb className="text-white text-3xl mr-4" />
            <h3 className="text-xl font-bold">Easy Booking</h3>
          </div>
          <div className="bg-gray-700 h-32 rounded-md p-4 flex items-center">
            <FaBitcoin className="text-white text-3xl mr-4" />
            <h3 className="text-xl font-bold">NFT</h3>
          </div>
          <div className="bg-gray-700 h-32 rounded-md p-4 flex items-center">
            <FaTicketAlt className="text-white text-3xl mr-4" />
            <h3 className="text-xl font-bold">Tatkal Booking</h3>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[48%] h-[70vh] bg-cover bg-center rounded-md" 
             style={{ backgroundImage: "url('main.webp')" }}>
        </div>
      </section>

      {/* NFT Cards Section */}
      <section className="nft-cards my-8">
        <h2 className="text-2xl font-bold mb-4">Trending NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftData.map((nft, index) => (
            <NFTCard key={index} nft={nft} />
          ))}
        </div>
      </section>

      {/* Tourist Places Section */}
      <section className="tourist-places my-8">
        <h2 className="text-2xl font-bold mb-4">Tourist Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {touristPlaces.map((place, index) => (
            <TouristPlaceCard
              key={index}
              place={place}
              actionButton={
                <button
                  onClick={() => openModal(place)}
                  className="text-white bg-blue-600 mt-3 hover:underline">
                  View Details
                </button>
              }
            />
          ))}
        </div>
      </section>

      {/* Modal for Tourist Places */}
      {modalData && (
        <div className="fixed inset-0 top-8 flex items-center justify-center bg-gradient-to-br from-black via-purple-500 to-blue-500 bg-opacity-75 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
            <img src={modalData.image} alt={modalData.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl text-white font-bold mb-2">{modalData.name}</h3>
            <p className="mb-4 text-white">{modalData.description}</p>
            <p className="mb-4 text-white">{modalData.travelDetails.charges}</p>
            <p className="mb-4 text-white">{modalData.travelDetails.travelMethods}</p>

            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
