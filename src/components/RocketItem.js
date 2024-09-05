import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/actions';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector((state) => state.reservedRockets || []);

  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const handleCancel = () => {
    dispatch(cancelReservation(rocket.id));
  };

  const isReserved = reservedRockets.some((r) => r.id === rocket.id);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{rocket.name}</h2>
      <p className="text-gray-600 mb-4">{rocket.description}</p>
      <button
        onClick={isReserved ? handleCancel : handleReserve}
        className={`w-full py-2 px-4 rounded-md text-white ${isReserved ? 'bg-red-500' : 'bg-blue-500'} hover:${isReserved ? 'bg-red-600' : 'bg-blue-600'} transition-colors duration-300`}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
    </div>
  );
};

export default RocketItem;
