import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from './RocketItem';
import { reserveRocket, cancelReservation } from '../redux/actions';

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const reservedRockets = useSelector(state => state.reservedRockets);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        const updatedRockets = response.data.map(rocket => ({
          ...rocket,
          reserved: reservedRockets.some(reservedRocket => reservedRocket.id === rocket.id)
        }));
        setRockets(updatedRockets);
      } catch (err) {
        setError('Failed to fetch rockets data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRockets();
  }, [reservedRockets]);

  const handleReserveClick = (rocket) => {
    dispatch(reserveRocket(rocket));
    updateLocalState(rocket.id, true);
  };

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
    updateLocalState(id, false);
  };

  const updateLocalState = (id, isReserved) => {
    setRockets(prevRockets =>
      prevRockets.map(rocket =>
        rocket.id === id ? { ...rocket, reserved: isReserved } : rocket
      )
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="rockets-container p-4 md:px-24 md:py-12">
      {rockets.length > 0 ? (
        <div className="rocket-item-container">
          {rockets.map(rocket => (
            <RocketItem
              key={rocket.id}
              rocket={{
                id: rocket.id,
                name: rocket.name,
                description: rocket.description,
                image: rocket.flickr_images[0] || 'https://via.placeholder.com/300',
                reserved: rocket.reserved || false,
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
