import { combineReducers } from 'redux';
import displayReducer from './reducer/DisplayReducer';
import userReducdr from './reducer/UserReducer';

export default combineReducers({
  display: displayReducer,
  user: userReducdr,
});
