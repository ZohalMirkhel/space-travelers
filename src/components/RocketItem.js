import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/actions';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(state => state.reservedRockets);

  const isReserved = reservedRockets.some(r => r.id === rocket.id);

  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div className="rocket-item p-4 border border-gray-300 rounded-lg shadow-md relative">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mt-2">{rocket.name}</h2>
      <p className="text-gray-600 mt-1">{rocket.description}</p>
      {isReserved && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          Reserved
        </div>
      )}
      <button
        onClick={handleReserve}
        className={`mt-4 px-4 py-2 rounded-lg ${isReserved ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'} hover:${isReserved ? 'bg-red-600' : 'bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
    </div>
  );
};

export default RocketItem;
