import React from 'react';
import IntegratedMap from './components/IntegratedMap';

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900">
      {/* Sidebar Section */}
      <div className="flex flex-col lg:w-1/3 h-full bg-gray-800 border-r border-gray-700 p-4">
        <p className="text-3xl font-semibold text-white mb-6">Overview</p>
        
        <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-white mb-2">Know About Current Disaster</h2>
          <p className="text-gray-300">TravelX leverages geospatial data to track real-time progress of ongoing travel and tourism initiatives, such as route development, tourist site enhancements, and transportation infrastructure improvements.</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-white mb-2">Current Location Tracking</h2>
          <p className="text-gray-300">Monitor the activities of multiple departments simultaneously to ensure coordinated efforts in travel and tourism development, including route planning, site management, and transportation enhancements.</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-white mb-2">Project Status Markers</h2>
          <p className="text-gray-300">Visual markers display the status of ongoing travel and tourism projects, helping users identify areas where work is in progress or completed, such as newly developed routes, updated tourist sites, or improved transportation infrastructure.</p>
        </div>
        
       
      </div>
      
      {/* Main Content Section */}
      <div className="flex flex-col lg:w-2/3 h-full bg-gray-900 p-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
          <h1 className="text-4xl font-semibold text-white"></h1>
        </div>
        {/* Integrated Map Component */}
        <IntegratedMap />
      </div>
    </div>
  );
};

export default App;
