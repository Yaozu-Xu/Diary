import { combineReducers } from 'redux';
import displayReducer from './reducer/DisplayReducer';
import userReducdr from './reducer/UserReducer';
import plansReducdr from './reducer/PlansReducer';
import tasksReducdr from './reducer/TasksReducer';
import TimeSelectorReducer from './reducer/TimeSelectorReducer';

export default combineReducers({
  display: displayReducer,
  user: userReducdr,
  plans: plansReducdr,
  task: tasksReducdr,
  time: TimeSelectorReducer,
});
