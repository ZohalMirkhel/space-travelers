const initialState = {
  rockets: [],
  reservedRockets: [],
};

const Reducer = (state = initialState, action) => {
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

export default Reducer;