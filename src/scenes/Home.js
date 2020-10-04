import React from 'react';
import NavHeader from '@/components/common/NavHeader';
import MainListView from '@/components/home/MainListView';
import SelectionOverlay from '@/components/home/SelectionOverlay';

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

const HomeScenes = () => (
  <>
    <NavHeader />
    <SelectionOverlay />
    <MainListView toDoList={toDoList} />
  </>
);

export default (HomeScenes);
