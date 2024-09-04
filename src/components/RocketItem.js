import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          src={rocket.image} 
          alt={rocket.name} 
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {rocket.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {rocket.description}
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-auto">
          {rocket.reserved ? (
            <span className="text-blue-600 font-bold">Reserved</span>
          ) : (
            <button 
              onClick={() => {
                console.log(`Reserve rocket ID: ${rocket.id}`); // Debugging log
                onReserve(rocket.id);
              }} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
            >
              Reserve Rocket
            </button>
          )}
          {rocket.reserved && (
            <button 
              onClick={() => {
                console.log(`Cancel reservation for rocket ID: ${rocket.id}`); // Debugging log
                onCancel(rocket.id);
              }} 
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors duration-300 mt-2"
            >
              Cancel Reservation
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketItem;
