import reducer from '@/store/reducer/UserReducer';

describe('user reuducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        uid: null,
        email: '',
        displayName: '',
        photoURL: '',
      },
    );
  });
});
