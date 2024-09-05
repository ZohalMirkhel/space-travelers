import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from './RocketItem';
import { reserveRocket, cancelReservation, setRockets } from '../redux/actions';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = useSelector((state) => state.reservedRockets);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        dispatch(setRockets(response.data));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rockets');
        setLoading(false);
      }
    };

    fetchRockets();
  }, [dispatch]);

  const handleReserveClick = (rocket) => {
    dispatch(reserveRocket(rocket));
  };

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="rockets-container p-4 md:px-24 md:py-12">
      {rockets.length > 0 ? (
        <div className="rocket-item-container">
          {rockets.map((rocket) => (
            <RocketItem
              key={rocket.id}
              rocket={{
                id: rocket.id,
                name: rocket.name,
                description: rocket.description,
                image: rocket.flickr_images[0] || 'https://via.placeholder.com/300',
                reserved: reservedRockets.some(r => r.id === rocket.id), // Check if reserved
              }}
              onReserve={handleReserveClick}
              onCancel={handleCancelClick}
            />
          ))}
        </div>
      ) : (
        <div>No rockets available</div>
      )}
    </div>
  );
};

export default Rockets;
