import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NavHeader from '@/components/headers/NavHeader';
import PlansHeader from '@/components/headers/PlansHeader';
import SwipeListView from '@/components/ListViews/SwipeListView';
import SelectionOverlay from '@/components/Overlays/SelectionOverlay';
import NewPlanOverlay from '@/components/Overlays/NewPlanOverlay';
import Initialization from '@/components/common/Initialization';
import plansCollection from '@/requester/Plans';
import { generatePid } from '@/utils/timer';

const PlansScreen = ({ route, navigation }) => {
  // date: '2020-8-13 format
  const { date } = route.params;
  const dispatch = useDispatch();
  const pid = generatePid(date);
  const uid = useSelector((state) => state.user.uid);

  function setTasksInStore(documentSnapshot) {
    const taskRes = documentSnapshot.data();
    // 今天有计划
    if (taskRes) {
      taskRes.pid = pid;
      dispatch({ type: 'SET_TASKS', payload: taskRes });
    } else {
      dispatch({
        type: 'SET_TASKS',
        payload: {
          pid: null,
          details: [
            {
              alarm: false,
              date: null,
              name: null,
              status: false,
            },
          ],
        },
      });
    }
  }

  useEffect(() => {
    if (!uid) {
      navigation.navigate('User', { screen: 'LogIn' });
    }
    const subscriber = plansCollection.tasksDocumentSnapshot(uid, pid, setTasksInStore);
    return () => subscriber();
  }, [uid, pid]);
  return (
    <>
      { uid && <Initialization />}
      <NavHeader />
      <SelectionOverlay />
      <NewPlanOverlay details={{ date, pid }} />
      <PlansHeader date={date} />
      <SwipeListView info={{ uid, pid }} />
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
