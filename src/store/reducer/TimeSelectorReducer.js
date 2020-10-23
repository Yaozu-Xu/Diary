const STATE = {
  hour: null,
  minute: null,
};

const timeSelectorReducer = (state = STATE, action) => {
  switch (action.type) {
    case 'SET_HOUR': {
      const newState = { ...state, hour: action.payload };
      return newState;
    }
    case 'SET_MINUTE': {
      const newState = { ...state, minute: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default timeSelectorReducer;
