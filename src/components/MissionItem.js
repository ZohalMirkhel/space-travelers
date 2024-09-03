import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/actions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="px-4 py-2 border">{mission.mission_name}</td>
      <td className="px-4 py-2 border">{mission.description}</td>
      <td className="px-4 py-2 border">
        <div className="flex flex-col items-start">
          <div className="mb-2">
            {mission.reserved ? (
              <span className="text-green-500">Active Member</span>
            ) : (
              <span className="text-gray-500">NOT A MEMBER</span>
            )}
          </div>
        </div>
      </td>
      <td className="px-4 py-2 border">
          <div>
            {mission.reserved ? (
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(leaveMission(mission.mission_id))}
              >
                Leave Mission
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(joinMission(mission.mission_id))}
              >
                Join Mission
              </button>
            )}
          </div>
      </td>
    </tr>
  );
};

export default MissionItem;
