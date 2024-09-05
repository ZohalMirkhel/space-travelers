import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col md:flex-row bg-white border border-gray-300 rounded shadow-lg overflow-hidden mb-6">
      <div className="md:w-1/3 flex justify-center items-center">
        <img 
          src={rocket.image} 
          alt={rocket.name} 
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            {rocket.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {rocket.reserved && (
              <span className="inline-block text-sm bg-[#5F9EA0] text-white font-semibold py-1 px-3 rounded mr-2">
                Reserved  
              </span>
            )}
            {rocket.description}
          </p>
        </div>

        <div className="flex justify-start mt-auto space-x-4">
          {rocket.reserved ? (
            <button 
              onClick={() => onCancel(rocket.id)} 
              className="bg-white text-gray-500 border border-gray-500 px-3 py-1 rounded text-sm"
            >
              Cancel Reservation
            </button>
          ) : (
            <button 
              onClick={() => onReserve(rocket)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketItem;
