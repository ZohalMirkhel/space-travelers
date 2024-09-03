import React from 'react';
import ProfileList from '../components/ProfileList';

const Profile = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">My Joined Missions</h1>
      <ProfileList />
    </div>
  );
};

export default Profile;
