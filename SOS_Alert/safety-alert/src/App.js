import React, { useState } from "react";
import axios from "axios";
import { FaBell, FaPlaneDeparture, FaShieldAlt } from "react-icons/fa"; // Travel and safety icons

const App = () => {
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [notifiedPeople, setNotifiedPeople] = useState([]);

  const triggerAlert = async () => {
    try {
      // Play alert sound
      const audio = new Audio("/alert.mp3");
      await audio.play();

      // Simulate API call
      await axios.post("http://localhost:5006/alert", {
        message: "A child might be in danger! Please respond immediately.",
      });

      // Hardcoded list of notified users
      const notified = [
        { name: "Tushar Jaiswal", email: "tusharjaiswal@gmail.com" },
        { name: "Samarth Shukla", email: "samarthshukla@gmail.com" },
        { name: "Amisha Pandit", email: "amishapandit@gmail.com" },
        { name: "Sudhanshu Sharma", email: "sudhanshusharma@gmail.com" },
      ];

      setNotifiedPeople(notified);
      setAlertTriggered(true);
      alert("Alert triggered successfully!");
    } catch (error) {
      console.error("Error triggering alert:", error);
      alert("Failed to trigger alert. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700">
      {/* Main Alert Box */}
      <div className="w-full max-w-4xl bg-gray-800 text-white rounded-xl shadow-2xl p-8 flex flex-col mb-8">
        <div className="flex items-center justify-between mb-8">
          <FaPlaneDeparture className="text-5xl text-blue-400" />
          <h1 className="text-4xl font-bold text-center text-white">Child Safety Alert</h1>
          <FaShieldAlt className="text-5xl text-blue-400" />
        </div>
        <p className="text-center mb-6 text-lg text-gray-400">
          Trigger an emergency alert to notify contacts in case of potential danger.
        </p>
      </div>

      {/* Trigger Alert Button with Icons */}
      <div className="flex justify-between items-center w-full max-w-4xl mb-8">
        <FaBell className="text-4xl text-blue-400" />
        <button
          onClick={triggerAlert}
          className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition-all"
        >
          Trigger Alert
        </button>
        <FaBell className="text-4xl text-blue-400" />
      </div>

      {/* People Notified Section */}
      {alertTriggered && (
        <div className="mt-8 bg-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-5xl">
          <h2 className="text-2xl font-semibold text-white mb-6">People Notified:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {notifiedPeople.map((person, index) => (
              <div
                key={index}
                className="bg-gray-600 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <span className="text-lg font-semibold text-white mb-2">{person.name}</span>
                <span className="text-sm text-gray-300">{person.email}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
