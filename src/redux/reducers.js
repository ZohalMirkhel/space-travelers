import { combineReducers } from 'redux';
const initialMissionsState = JSON.parse(localStorage.getItem('missions')) || [];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return action.payload.map((mission) => ({
        ...mission,
        reserved: state.find((m) => m.mission_id === mission.mission_id)?.reserved || false,
      }));
    case 'JOIN_MISSION':
      const newStateJoin = state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: true }
          : mission
      );
      localStorage.setItem('missions', JSON.stringify(newStateJoin));
      return newStateJoin;
    case 'LEAVE_MISSION':
      const newStateLeave = state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: false }
          : mission
      );
      localStorage.setItem('missions', JSON.stringify(newStateLeave));
      return newStateLeave;
    default:
      return state;
  }
};

const initialRocketsState = {
  rockets: [],
  reservedRockets: [],
};

const rocketsReducer = (state = initialRocketsState, action) => {
  switch (action.type) {
    case 'SET_ROCKETS': {
      return {
        ...state,
        rockets: action.payload,
      };
    }
    case 'RESERVE_ROCKET': {
      const newState = {
        ...state,
        reservedRockets: [...state.reservedRockets, action.payload],
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload.id ? { ...rocket, reserved: true } : rocket
        ),
      };
      return newState;
    }
    case 'CANCEL_RESERVATION': {
      const newState = {
        ...state,
        reservedRockets: state.reservedRockets.filter(rocket => rocket.id !== action.payload),
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
        ),
      };
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

export default rootReducer;
