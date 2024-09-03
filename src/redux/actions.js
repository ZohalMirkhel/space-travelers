export const FETCH_MISSIONS = 'FETCH_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchMissions = (missions) => ({
  type: FETCH_MISSIONS,
  payload: missions.map(mission => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  })),
});


export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});
