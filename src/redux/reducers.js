import { FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from './actions';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => ({
        ...mission,
        reserved: false,
      }));

    case JOIN_MISSION:
      return state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: true }
          : mission
      );

    case LEAVE_MISSION:
      return state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: false }
          : mission
      );

    default:
      return state;
  }
};

export default missionsReducer;
