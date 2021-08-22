import axios from 'axios';


const NOTFICATION_DATA_URL = 'https://data.covid19india.org/updatelog/log.json';

const STATE_DATA_URL = 'https://data.covid19india.org/v4/min/data.min.json';

// 

export const fetchNotificationData = () => async dispatch => {

  const response = await axios.get(NOTFICATION_DATA_URL);


  dispatch({ type: 'FETCH_NOTIFICATION_DATA', payload: response.data });

};


export const fetchStateData = () => async dispatch => {

  const response = await axios.get(STATE_DATA_URL);

  console.log(response);

  dispatch({ type: 'FETCH_STATE_DATA', payload: response.data });
  
};
