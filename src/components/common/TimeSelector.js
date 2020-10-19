import React, { useState, useEffect } from 'react';
import { isToday } from '@/utils/timer';

const TimeSelector = (props) => {
  const minutesList = [...Array(61).keys()];
  const [hoursList, setHoursList] = useState();

  if (isToday(timer)) {
    const temp = [...Array(25).keys()].filter((hour) => hour >= new Date().getHours());
    setHoursList(temp.map((hour) => (hour <= 12 ? `上午  ${hour}` : `下午  ${hour - 12}`)));
  } else {
    setHoursList([...Array(25).keys()].map((hour) => (hour <= 12 ? `上午  ${hour}` : `下午  ${hour - 12}`)));
  }
  return (
    <></>
  );
};

export default TimeSelector;
