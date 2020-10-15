import { setPlans } from '@/store/action/PlansAction';

describe('plans actions', () => {
  it('should create an action to set plans', () => {
    const data = {
      details: [
        {
          date: 123123123,
          pid: 'asdasda',
        },
      ],
    };
    const expectedAction = {
      type: 'SET_PLANS',
      payload: data.details,
    };
    expect(setPlans(data)).toEqual(expectedAction);
  });
});
