const STATE = {
  // 0 = 全部 1 = 未完成 2 = 已完成
  currentSelection: 0,
  toggle: false,
  newPlanToggle: false,
};

const displayReducer = (state = STATE, action) => {
  switch (action.type) {
    case 'SET_TOOGLE': {
      const newState = { ...state, toggle: !state.toggle };
      return newState;
    }
    case 'PLAN_TOOGLE': {
      const newState = { ...state, newPlanToggle: !state.newPlanToggle };
      return newState;
    }
    case 'SET_SELECTION': {
      const newState = { ...state, currentSelection: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default displayReducer;
