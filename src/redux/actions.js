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
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
export const SET_ROCKETS = 'SET_ROCKETS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET,
  payload: rocket,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const setRockets = (rockets) => ({
  type: SET_ROCKETS,
  payload: rockets,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
