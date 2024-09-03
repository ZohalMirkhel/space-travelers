import React from 'react';
import RocketsComponent from '../components/Rockets'; // Import the actual Rockets component

// Placeholder Rockets component
const RocketsPlaceholder = () => {
  return <div>Rockets Page</div>;
};

const Rockets = () => {
  return (
    <div>
      <h1>SpaceX Rockets</h1>
      <RocketsComponent />
      <RocketsPlaceholder /> {/* This will render the placeholder component */}
    </div>
  );
};

export default Rockets;
