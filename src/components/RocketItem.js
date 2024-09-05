import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/actions';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(state => state.reservedRockets || []);

  if (!rocket || !Array.isArray(reservedRockets)) {
    return <div>Error: Invalid data</div>;
  }

  const isReserved = reservedRockets.some(r => r && r.id === rocket.id);

  const handleReserve = (rocketId) => {
    if (isReserved) {
      dispatch(cancelReservation(rocketId));
    } else {
      dispatch(reserveRocket(rocketId));
    }
  };

  return (
    <div className="rocket-item p-4 border rounded-md shadow-md mb-4">
      {rocket.flickr_images && rocket.flickr_images[0] ? (
        <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full h-48 object-cover rounded-md mb-4" />
      ) : (
        <div>No image available</div>
      )}
      <h2 className="text-xl font-bold mb-2">{rocket.name}</h2>
      <p className="text-gray-700">{rocket.description}</p>
      {isReserved && <span className="reserved-badge bg-green-500 text-white px-2 py-1 rounded mr-2">Reserved</span>}
      <button
        onClick={() => handleReserve(rocket.id)}
        className={`mt-4 px-4 py-2 rounded ${isReserved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
    </div>
  );
};

export default RocketItem;
