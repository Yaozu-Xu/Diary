import { getTimeStamp, isToday } from '@/utils/timer';

describe('Timer utils', () => {
  it('should return current date time', () => {
    expect(getTimeStamp(1602837217585)).toEqual({
      year: '2020',
      month: '10',
      day: '16',
      format: '2020-10-16',
    });
  });

  it('should return false', () => {
    expect(isToday(1612837217585)).toEqual(false);
  });
});
