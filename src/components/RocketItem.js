import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation, setReservedRockets } from '../redux/actions';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(state => state.reservedRockets.map(r => r.id));
  const isReserved = reservedRockets.includes(rocket.id);

  useEffect(() => {
    const reservedFromLocalStorage = JSON.parse(localStorage.getItem('reservedRockets')) || [];
    if (Array.isArray(reservedFromLocalStorage)) {
      dispatch(setReservedRockets(reservedFromLocalStorage));
    }
  }, [dispatch]);

  const handleReserve = () => {
    if (isReserved) {
      dispatch(cancelReservation(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{rocket.name}</h2>
      <p className="text-gray-700 mb-4">
        {isReserved && <span className="text-white bg-green-500 px-2 py-1 rounded-md mr-2">Reserved</span>}
        {rocket.description}
      </p>
      <button
        onClick={handleReserve}
        className={`py-2 px-4 rounded-lg text-white ${isReserved ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}`}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    </div>
  );
};

export default RocketItem;
