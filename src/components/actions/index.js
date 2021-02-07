import axios from 'axios';

export const fetchNotificationData = () => async dispatch => {
  const response = await axios.get('https://api.covid19india.org/updatelog/log.json');

  dispatch({ type: 'FETCH_NOTIFICATION_DATA', payload: response.data });
};

export const fetchStateData = () => async dispatch => {
  const response = await axios.get('https://api.covid19india.org/v4/min/data.min.json');

  dispatch({ type: 'FETCH_STATE_DATA', payload: response.data });
};
