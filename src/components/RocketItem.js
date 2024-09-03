import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="rocket-card">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
      <div className="rocket-info">
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        {rocket.reserved ? (
          <button className="cancel-reservation" onClick={() => onCancel(rocket.id)}>
            Cancel Reservation
          </button>
        ) : (
          <button className="reserve-rocket" onClick={() => onReserve(rocket.id)}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default RocketItem;
