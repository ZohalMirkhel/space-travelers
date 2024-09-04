export const FETCH_MISSIONS = 'FETCH_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchMissions = (missions) => {
  const savedMissions = JSON.parse(localStorage.getItem('missions')) || [];

  const updatedMissions = missions.map(mission => {
    const savedMission = savedMissions.find(saved => saved.mission_id === mission.mission_id);
    return {
      ...mission,
      reserved: savedMission ? savedMission.reserved : false,
    };
  });

  return {
    type: FETCH_MISSIONS,
    payload: updatedMissions,
  };
};

export const joinMission = (id) => (dispatch, getState) => {
  dispatch({
    type: JOIN_MISSION,
    payload: id,
  });

  const missions = getState().missions;
  localStorage.setItem('missions', JSON.stringify(missions));
};

export const leaveMission = (id) => (dispatch, getState) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: id,
  });

  const missions = getState().missions;
  localStorage.setItem('missions', JSON.stringify(missions));
};
