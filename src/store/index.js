import { combineReducers } from 'redux';
import displayReducer from './reducer/DisplayReducer';

export default combineReducers({
  display: displayReducer,
});
