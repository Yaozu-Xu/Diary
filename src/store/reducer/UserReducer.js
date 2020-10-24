const STATE = {
  uid: null,
  displayName: '',
  email: '',
  photoURL: '',
};

const displayReducer = (state = STATE, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const newState = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default displayReducer;
