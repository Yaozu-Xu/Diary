import React from 'react';
import Calendar from '@/components/common/Calendar';

const RecordsScenes = () => {
  const calendarProps = { maxDate: '2020-11-30' };
  return (
    <Calendar settings={calendarProps} />
  );
};

export default RecordsScenes;
