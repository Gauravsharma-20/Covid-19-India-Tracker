

const numberFormating = (val) => {
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2) + 'Cr';
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2) + 'L';
  } else if(val >= 1000) {
     val = (val/1000).toFixed(2) + 'K';
  }
  return val;
};


const timeAgo = (date) => {
  let seconds = Math.floor((new Date() - date)/1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

export { timeAgo , numberFormating };
