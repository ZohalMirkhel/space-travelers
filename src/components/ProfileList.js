import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const missions = useSelector((state) => state.missions);

  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Joined Missions</h1>
      {joinedMissions.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Mission</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="border border-gray-300 px-6 py-2 text-base text-left">
                  {mission.mission_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No missions joined yet.</p>
      )}
    </div>
  );
};

export default ProfileList;
