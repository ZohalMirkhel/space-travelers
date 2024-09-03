import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/action';
import MissionItem from './MissionItem';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state);

  useEffect(() => {
    const getMissions = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      dispatch(fetchMissions(data));
    };

    getMissions();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Mission</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
