/* eslint-disable no-bitwise */
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

export const generatePid = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed; let
    h2 = 0x41c6ce57 ^ seed;
  // eslint-disable-next-line no-plusplus
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
