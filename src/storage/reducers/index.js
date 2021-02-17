import { combineReducers } from 'redux';

import notificationDataReducer from './notificationDataReducer';
import stateDataReducer from './stateDataReducer';

export default combineReducers({

  notificationData: notificationDataReducer,
  stateData: stateDataReducer
  
});
