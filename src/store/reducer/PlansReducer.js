const STATE = {
  details: [
    {
      date: null,
      pid: null,
    },
  ],
};

const PlansReducer = (state = STATE, action) => {
  switch (action.type) {
    case 'SET_PLANS': {
      const newState = { details: action.payload.details };
      return newState;
    }
    default:
      return state;
  }
};

export default PlansReducer;
