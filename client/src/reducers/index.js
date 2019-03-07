import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer  // keys === passed as state in mapStateToProps
});