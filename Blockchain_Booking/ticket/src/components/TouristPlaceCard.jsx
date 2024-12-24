import React from 'react';

const TouristPlaceCard = ({ place,actionButton }) => {
  return (
    <div className="tourist-place-card p-4 border-white border-2 bg-gray-900 rounded-md shadow-lg">
      <img src={place.image} alt={place.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-4 text-xl font-semibold">{place.name}</h3>
      <p className="text-white">{place.description}</p>
      {actionButton}
    </div>
  );
};

export default TouristPlaceCard;
