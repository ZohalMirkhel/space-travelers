import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="rocket-item border rounded-lg shadow-lg p-6 mb-6 bg-white">
      <img 
        src={rocket.image} 
        alt={rocket.name} 
        className="rocket-image mb-4 w-full h-56 object-cover rounded-lg border"
      />
      <h3 className="rocket-name text-2xl font-semibold text-gray-800 mb-3">
        {rocket.name}
      </h3>
      <p className="rocket-description text-gray-600 mb-5">
        {rocket.description}
      </p>
      {rocket.reserved ? (
        <>
          <span className="text-blue-500 font-bold mb-4 block">Reserved</span>
          <button 
            onClick={() => onCancel(rocket.id)} 
            className="cancel-button bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-2 rounded-full transition-all"
          >
            Cancel Reservation
          </button>
        </>
      ) : (
        <button 
          onClick={() => onReserve(rocket.id)} 
          className="reserve-button bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-2 rounded-full transition-all"
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

export default RocketItem;
