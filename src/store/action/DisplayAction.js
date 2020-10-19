export const setSelection = (selection) => (
  {
    type: 'SET_SELECTION',
    payload: selection,
  }
);

export const setToggle = () => (
  {
    type: 'SET_TOOGLE',
  }
);

export const setNewPlanToggle = () => (
  {
    type: 'PLAN_TOOGLE',
  }
);
