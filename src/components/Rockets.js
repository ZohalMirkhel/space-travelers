import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RocketItem from './RocketItem';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/reducers'; 

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        const reservedRockets = JSON.parse(localStorage.getItem('reservedRockets')) || [];
        const updatedRockets = response.data.map(rocket => ({
          ...rocket,
          reserved: !!reservedRockets.find(reservedRocket => reservedRocket.id === rocket.id)
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

  const handleReserveClick = (id) => {
    dispatch(reserveRocket(id));
    setRockets(prevRockets =>
      prevRockets.map(rocket =>
        rocket.id === id ? { ...rocket, reserved: true } : rocket
      )
    );
  };

  const handleCancelClick = (id) => {
    dispatch(cancelReservation(id));
    setRockets(prevRockets =>
      prevRockets.map(rocket =>
        rocket.id === id ? { ...rocket, reserved: false } : rocket
      )
    );
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
