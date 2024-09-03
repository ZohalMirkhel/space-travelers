import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="rocket-item border p-4 mb-4">
      <img src={rocket.image} alt={rocket.name} className="rocket-image mb-2 w-full h-48 object-cover" />
      <h3 className="rocket-name text-xl font-bold mb-2">{rocket.name}</h3>
      <p className="rocket-description mb-4">{rocket.description}</p>
      {rocket.reserved ? (
        <>
          <span className="text-blue-600 font-bold mb-2">Reserved</span>
          <button 
            onClick={() => onCancel(rocket.id)} 
            className="cancel-button bg-red-500 text-white px-4 py-2 mt-2 rounded"
          >
            Cancel Reservation
          </button>
        </>
      ) : (
        <button 
          onClick={() => onReserve(rocket.id)} 
          className="reserve-button bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

export default RocketItem;
