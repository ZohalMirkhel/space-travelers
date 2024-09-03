import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const joinedMissions = useSelector((state) =>
    state.missions.filter((mission) => mission.reserved)
  );

  if (joinedMissions.length === 0) {
    return <p className="text-center">You have not joined any missions yet.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-6 py-2">Mission</th>
          </tr>
        </thead>
        <tbody>
          {joinedMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="border border-gray-300 px-6 py-2">{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
