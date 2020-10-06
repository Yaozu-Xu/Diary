import { setSelection, setToggle } from '@/store/action/DisplayAction';

describe('display actions', () => {
  it('should create an action to set selection', () => {
    const payload = 1;
    const expectedAction = {
      type: 'SET_SELECTION',
      payload,
    };
    expect(setSelection(payload)).toEqual(expectedAction);
  });

  it('should create an action to set toggle', () => {
    const expectedAction = {
      type: 'SET_TOOGLE',
    };
    expect(setToggle()).toEqual(expectedAction);
  });
});
