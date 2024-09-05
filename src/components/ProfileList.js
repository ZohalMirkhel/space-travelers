import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector(state => state.reservedRockets);

  return (
    <div>
      <h2>Your Reserved Rockets</h2>
      {reservedRockets.length > 0 ? (
        reservedRockets.map(rocket => (
          <div key={rocket.id}>
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
          </div>
        ))
      ) : (
        <p>No rockets reserved yet.</p>
      )}
    </div>
  );
};

export default ProfileList;
