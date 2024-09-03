import React, { useState, useEffect } from 'react';
import RocketItem from './RocketItem'; // Assuming you have RocketItem.js

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching rockets data
    const fetchRockets = async () => {
      // Simulated data
      const rocketData = [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'The first rocket developed by SpaceX.',
          flickr_images: ['https://example.com/falcon1.jpg'],
          reserved: false,
        },
        // Add more rockets as needed
      ];
      setRockets(rocketData);
      setLoading(false);
    };

    fetchRockets();
  }, []);

  const handleReserveClick = (id) => {
    setRockets((prevRockets) =>
      prevRockets.map((rocket) =>
        rocket.id === id ? { ...rocket, reserved: !rocket.reserved } : rocket
      )
    );
  };

  const handleCancelClick = (id) => {
    handleReserveClick(id); // Toggle reservation status
  };

  return (
    <div className="rockets-container">
      {loading && <p>Loading...</p>}
      {rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          rocket={rocket}
          onReserve={handleReserveClick}
          onCancel={handleCancelClick}
        />
      ))}
    </div>
  );
};

export default Rockets;
