const initialState = JSON.parse(localStorage.getItem('missions')) || [];

const Reducer = (state = initialState, action) => {
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

export default Reducer;
