import reducer from '@/store/reducer/DisplayReducer';

describe('display reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentSelection: 0,
        toggle: false,
      },
    );
  });
});
