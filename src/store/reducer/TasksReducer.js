const STATE = {
  pid: null,
  details: [
    {
      alarm: false,
      date: null,
      name: null,
      status: false,
    },
  ],
};

const TasksReducer = (state = STATE, action) => {
  switch (action.type) {
    case 'SET_TASKS': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default TasksReducer;
