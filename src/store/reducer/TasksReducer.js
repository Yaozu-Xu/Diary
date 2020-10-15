const STATE = {
  pid: '',
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
      const newState = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default TasksReducer;
