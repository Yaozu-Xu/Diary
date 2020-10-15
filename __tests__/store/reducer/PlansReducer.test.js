import reducer from '@/store/reducer/PlansReducer';

describe('plans reuducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        details: [
          {
            date: null,
            pid: null,
          },
        ],
      },
    );
  });
});
