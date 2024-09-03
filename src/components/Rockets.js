import React, { useState } from 'react';
import RocketItem from './RocketItem'; // Import RocketItem component

const Rockets = () => {
  const [rockets, setRockets] = useState([
    {
      id: 1,
      name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      image: 'https://example.com/falcon1.jpg', // Replace with actual image URL
      reserved: false,
    },
    {
      id: 2,
      name: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      image: 'https://example.com/falcon9.jpg', // Replace with actual image URL
      reserved: true,
    },
    {
      id: 3,
      name: 'Falcon Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage, and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      image: 'https://example.com/falconheavy.jpg', // Replace with actual image URL
      reserved: false,
    },
    {
      id: 4,
      name: 'Starship',
      description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy, and Dragon.',
      image: 'https://example.com/starship.jpg', // Replace with actual image URL
      reserved: false,
    },
  ]);

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

  return (
    <div className="rockets-container p-4">
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
