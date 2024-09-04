import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import RocketItem from './RocketItem'; 

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        setRockets(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rockets data.');
        setLoading(false);
      }
    };

    fetchRockets();
  }, []);

  const handleReserveClick = (id) => {
    setRockets((prevRockets) =>
      prevRockets.map((rocket) =>
        rocket.id === id ? { ...rocket, reserved: true } : rocket
      )
    );
  };

  const handleCancelClick = (id) => {
    setRockets((prevRockets) =>
      prevRockets.map((rocket) =>
        rocket.id === id ? { ...rocket, reserved: false } : rocket
      )
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <div className="">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            rocket={{
              id: rocket.id,
              name: rocket.name,
              description: rocket.description,
              image: rocket.flickr_images[0] || 'https://via.placeholder.com/300', 
              reserved: rocket.reserved || false, // Ensure reserved status is passed
            }}
            onReserve={handleReserveClick}
            onCancel={handleCancelClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Rockets;
