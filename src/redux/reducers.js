const initialState = {
  rockets: [],
  reservedRockets: [],
};

const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET: {
      const reservedRocket = state.rockets.find(rocket => rocket.id === action.payload);
      if (!reservedRocket) return state;

      return {
        ...state,
        reservedRockets: [...state.reservedRockets, reservedRocket],
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
        ),
      };
    }
    case CANCEL_RESERVATION: {
      return {
        ...state,
        reservedRockets: state.reservedRockets.filter(rocket => rocket.id !== action.payload),
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
        ),
      };
    }
    default:
      return state;
  }
};

export default rocketReducer;
