import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector(state => state.reservedRockets);

  if (!reservedRockets || reservedRockets.length === 0) {
    return <p>No rockets reserved</p>;
  }

  return (
    <div>
      {reservedRockets.map(rocket => (
        rocket && rocket.name ? (
          <div key={rocket.id} className="rocket-item">
            <h2>{rocket.name}</h2>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default ProfileList;
