import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavHeader from '@/components/headers/NavHeader';
import MainListView from '@/components/ListViews/MainListView';
import SwipeList from '@/components/ListViews/SwipeList';
import SelectionOverlay from '@/components/Overlays/SelectionOverlay';
import plansCollection from '@/requester/Plans';

const PlansScreen = () => {
  const uid = '46JDW7egRJOUycYK5HYpfvCdy3j2';
  const pid = 'wj1gooYRtymWkb65NFP7';

  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plans.details.filter(
    (item) => item.pid === pid,
  ));
  function setTasksInStore(documentSnapshot) {
    const payload = documentSnapshot.data();
    payload.pid = pid;
    dispatch({ type: 'SET_TASKS', payload });
  }
  useEffect(() => {
    const subscriber = plansCollection.tasksDocumentSnapshot(uid, pid, setTasksInStore);
    return subscriber;
  }, [uid]);
  return (
    <>
      <NavHeader />
      <SelectionOverlay />
      <MainListView plan={plan} />
      <SwipeList />
    </>
  );
};

export default PlansScreen;
