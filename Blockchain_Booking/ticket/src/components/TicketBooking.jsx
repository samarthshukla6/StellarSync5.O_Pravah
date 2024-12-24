// import React, { useState } from 'react';

// const TicketBooking = () => {
//   const [transport, setTransport] = useState("train");
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const [date, setDate] = useState("");
//   const [ticketCount, setTicketCount] = useState(1);

//   const handleBooking = (e) => {
//     e.preventDefault();
//     alert(`Booking Details:\nTransport: ${transport}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}\nTickets: ${ticketCount}`);
//   };

//   return (
  
//     <div className=" bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto ">
//       <h2 className="text-3xl font-bold text-center mb-6">Book Your Ticket</h2>
//       <form onSubmit={handleBooking} className="space-y-4">
//         {/* Transport Selection */}
//         <div>
//           <label className="block text-lg font-medium text-white mb-2">Select Transport</label>
//           <select
//             value={transport}
//             onChange={(e) => setTransport(e.target.value)}
//             className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="train">Train</option>
//             <option value="bus">Bus</option>
//           </select>
//         </div>

//         {/* Pickup Location */}
//         <div>
//           <label className="block text-lg font-medium text-white mb-2">Pickup Location</label>
//           <input
//             type="text"
//             value={pickup}
//             onChange={(e) => setPickup(e.target.value)}
//             placeholder="Enter Pickup Location"
//             className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Drop Location */}
//         <div>
//           <label className="block text-lg font-medium text-white mb-2">Drop Location</label>
//           <input
//             type="text"
//             value={drop}
//             onChange={(e) => setDrop(e.target.value)}
//             placeholder="Enter Drop Location"
//             className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Date Selection */}
//         <div>
//           <label className="block text-lg font-medium text-white mb-2">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Number of Tickets */}
//         <div>
//           <label className="block text-lg font-medium text-white mb-2">Number of Tickets</label>
//           <input
//             type="number"
//             min="1"
//             value={ticketCount}
//             onChange={(e) => setTicketCount(e.target.value)}
//             className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>

//   );
// };

// export default TicketBooking;




import React, { useState } from 'react';

const TicketBooking = ({ onFormSubmit }) => {
  const [transport, setTransport] = useState('train');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [ticketCount, setTicketCount] = useState(1);

  const handleBooking = (e) => {
    e.preventDefault();
    const formData = {
      transport,
      pickup,
      drop,
      date,
      ticketCount,
    };
    onFormSubmit(formData);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Ticket</h2>
      <form onSubmit={handleBooking} className="space-y-4">
        {/* Transport Selection */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">Select Transport</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">Pickup Location</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter Pickup Location"
            className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Drop Location */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">Drop Location</label>
          <input
            type="text"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            placeholder="Enter Drop Location"
            className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Number of Tickets */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">Number of Tickets</label>
          <input
            type="number"
            min="1"
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
            className="w-full bg-gray-800 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TicketBooking;

