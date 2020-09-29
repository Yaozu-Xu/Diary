import React from 'react';
import { ScrollView } from 'react-native';
import NavHeader from '@/components/common/NavHeader';
import MainListView from '@/components/home/MainListView';

const toDoList = [
  {
    planName: '今日安排',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    taskAmount: 9,
    taskList: [
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
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
    ],
  },
  {
    planName: '今日安排',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    taskAmount: 9,
    taskList: [
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
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
      { taskName: '刷牙', scheduledTime: '9:00', status: true },
    ],
  },
];

const App = () => (
  <>
    <NavHeader />
    <ScrollView>
      <MainListView toDoList={toDoList} />
    </ScrollView>
  </>
);
export default App;
