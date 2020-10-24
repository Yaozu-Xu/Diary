export const setHour = (hour) => (
  {
    type: 'SET_HOUR',
    payload: hour,
  }
);

export const setMinute = (minute) => (
  {
    type: 'SET_MINUTE',
    payload: minute,
  }
);
