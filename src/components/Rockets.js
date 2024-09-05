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
    const savedRockets = JSON.parse(localStorage.getItem('reservedRockets')) || [];
    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        const updatedRockets = response.data.map(rocket => ({
          ...rocket,
          reserved: savedRockets.some(reservedRocket => reservedRocket.id === rocket.id),
        }));
        setRockets(updatedRockets);
      } catch (err) {
        setError('Failed to fetch rockets data.');
      } finally {
        setLoading(false);
      }
    };
    fetchRockets();
  }, []);

  const handleReserveClick = (rocket) => {
    dispatch(reserveRocket(rocket));
    updateLocalStorage(rocket, true);
  };

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
    updateLocalStorage(id, false);
  };

  const updateLocalStorage = (rocketOrId, isReserving) => {
    let savedRockets = JSON.parse(localStorage.getItem('reservedRockets')) || [];
    
    if (isReserving) {
      if (!savedRockets.some(savedRocket => savedRocket.id === rocketOrId.id)) {
        savedRockets.push(rocketOrId);
      }
    } else {
      savedRockets = savedRockets.filter(savedRocket => savedRocket.id !== rocketOrId);
    }

    localStorage.setItem('reservedRockets', JSON.stringify(savedRockets));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="rockets-container">
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
