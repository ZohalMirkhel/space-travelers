import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/action';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="px-4 py-2 border">{mission.name}</td>
      <td className="px-4 py-2 border">{mission.description}</td>
      <td className="px-4 py-2 border">
        {mission.reserved ? (
          <span className="text-green-500 mr-4">Active Member</span>
        ) : (
          <span className="text-gray-500 mr-4">NOT A MEMBER</span>
        )}
        {mission.reserved ? (
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(leaveMission(mission.id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(joinMission(mission.id))}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

export default MissionItem;
