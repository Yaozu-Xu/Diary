import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NavHeader from '@/components/headers/NavHeader';
import PlansHeader from '@/components/headers/PlansHeader';
import SwipeList from '@/components/ListViews/SwipeList';
import SelectionOverlay from '@/components/Overlays/SelectionOverlay';
import NewPlanOverlay from '@/components/Overlays/NewPlanOverlay';
import plansCollection from '@/requester/Plans';
import { generatePid } from '@/utils/timer';

const PlansScreen = ({ route }) => {
  // date: '2020-8-13 format
  const { date } = route.params;
  const dispatch = useDispatch();
  // const pid = generatePid(date);
  const pid = 'wj1gooYRtymWkb65NFP7';
  const uid = '46JDW7egRJOUycYK5HYpfvCdy3j2';

  function setTasksInStore(documentSnapshot) {
    const taskRes = documentSnapshot.data();
    // 今天有计划
    if (taskRes) {
      taskRes.pid = pid;
      dispatch({ type: 'SET_TASKS', payload: taskRes });
    }
  }

  useEffect(() => {
    const subscriber = plansCollection.tasksDocumentSnapshot(uid, pid, setTasksInStore);
    return subscriber;
  }, [uid]);
  return (
    <>
      <NavHeader />
      <SelectionOverlay />
      <NewPlanOverlay />
      <PlansHeader date={date} />
      <SwipeList />
    </>
  );
};

PlansScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    }),
  }),
};

PlansScreen.defaultProps = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      date: new Date(),
    }),
  }),
};

export default PlansScreen;
