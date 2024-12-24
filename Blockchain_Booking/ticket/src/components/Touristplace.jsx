const TouristPlaceCard = ({ place, actionButton }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
      <p className="text-gray-400 mb-4">{place.description}</p>
      {actionButton}
    </div>
  );
  
  export default TouristPlaceCard;
  