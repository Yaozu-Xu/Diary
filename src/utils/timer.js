/**
 *
 * @param {*} seconds current seconds
 */
export const getTimeStamp = (seconds) => {
  const date = seconds ? new Date(seconds) : new Date();
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const dateArr = dateString.split('-');
  return {
    year: dateArr[0],
    month: dateArr[1],
    day: dateArr[2],
    format: dateString,
  };
};

export const isToday = (seconds) => {
  const timeStamp = getTimeStamp(seconds);
  const today = getTimeStamp(new Date());
  return JSON.stringify(timeStamp) === JSON.stringify(today);
};

export const getCurrentHour = (date) => {
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const hours = date.getHours();
  return { minutes, hours };
};
