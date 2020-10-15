import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavHeader from '@/components/common/NavHeader';
import MainListView from '@/components/home/MainListView';
import SelectionOverlay from '@/components/home/SelectionOverlay';
import plansCollection from '@/requester/Plans';

const toDoList = [
  {
    planName: '今日安排',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    taskAmount: 9,
    toggle: false,
    taskList: [
      { taskName: '刷牙yyyyyyy', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
    ],
  },
];

const PlansScreen = () => {
  const dispatch = useDispatch();
  const uid = '46JDW7egRJOUycYK5HYpfvCdy3j2';
  const pid = 'wj1gooYRtymWkb65NFP7';

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
      <MainListView toDoList={toDoList} />
    </>
  );
};

export default PlansScreen;
