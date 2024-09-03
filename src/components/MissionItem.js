import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/actions';

const MissionItem = ({ mission, isEven }) => {
  const dispatch = useDispatch();

  const rowClass = isEven ? 'bg-gray-100' : 'bg-white';

  return (
    <tr className={rowClass}>
      <td className="border border-gray-300 px-4 py-2 font-bold">{mission.mission_name}</td>
      <td className="border border-gray-300 px-4 py-2">{mission.description}</td>
      <td className="px-6 py-2 border">
        <div className="flex flex-col items-start">
          <div className="mb-2">
            {mission.reserved ? (
              <span className="bg-[#5F9EA0] text-white px-6 py-1 rounded">Active Member</span>
            ) : (
              <span className="bg-gray-500 text-white px-8 py-1 rounded">NOT A MEMBER</span>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-2 border">
        <div>
          {mission.reserved ? (
            <button
              className="bg-white text-red-500 border border-red-500 px-8 py-1 rounded"
              onClick={() => dispatch(leaveMission(mission.mission_id))}
            >
              Leave Mission
            </button>
          ) : (
            <button
              className="bg-gray-200 text-black px-8 py-1 rounded ml-2"
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
