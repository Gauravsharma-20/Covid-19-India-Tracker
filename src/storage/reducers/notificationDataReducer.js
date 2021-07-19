export default (state = [], action) => {
  
  switch (action.type) {
    case 'FETCH_NOTIFICATION_DATA':
      return action.payload;
    default:
      return state;
  }
};
