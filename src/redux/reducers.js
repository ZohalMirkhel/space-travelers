import { combineReducers } from 'redux';
import { FETCH_ROCKETS_SUCCESS, RESERVE_ROCKET, CANCEL_RESERVATION, SET_RESERVED_ROCKETS } from './actions';

const initialMissionsState = JSON.parse(localStorage.getItem('missions')) || [];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return action.payload.map((mission) => ({
        ...mission,
        reserved: state.find((m) => m.mission_id === mission.mission_id)?.reserved || false,
      }));
    case 'JOIN_MISSION': {
      const newStateJoin = state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: true }
          : mission
      );
      localStorage.setItem('missions', JSON.stringify(newStateJoin));
      return newStateJoin;
    }
    case 'LEAVE_MISSION': {
      const newStateLeave = state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: false }
          : mission
      );
      localStorage.setItem('missions', JSON.stringify(newStateLeave));
      return newStateLeave;
    }
    default:
      return state;
  }
};

const initialRocketsState = {
  rockets: [],
  reservedRockets: JSON.parse(localStorage.getItem('reservedRockets')) || [],
};

const rocketsReducer = (state = initialRocketsState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
      };
    case SET_RESERVED_ROCKETS:
      return {
        ...state,
        reservedRockets: action.payload,
      };
    case RESERVE_ROCKET: {
      const updatedReserved = [...state.reservedRockets, { id: action.payload.id }];
      localStorage.setItem('reservedRockets', JSON.stringify(updatedReserved));
      return {
        ...state,
        reservedRockets: updatedReserved,
      };
    }
    case CANCEL_RESERVATION: {
      const updatedReserved = state.reservedRockets.filter(
        (rocket) => rocket.id !== action.payload
      );
      localStorage.setItem('reservedRockets', JSON.stringify(updatedReserved));
      return {
        ...state,
        reservedRockets: updatedReserved,
      };
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
