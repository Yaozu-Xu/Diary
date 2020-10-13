import { setLogin } from '@/store/action/UserAction';

describe('user actions', () => {
  it('should set user state if login sucessfully', () => {
    const payload = {
      email: 'gggg@qq.com',
      displayName: 'xyz',
      photoUrl: 'www',
      uid: 'jakajlsakjl',
    };
    const expectedAction = {
      type: 'SET_USER',
      payload,
    };
    expect(setLogin(payload)).toEqual(expectedAction);
  });
});
