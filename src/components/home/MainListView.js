import React from 'react';
import { ScrollView } from 'react-native';
import {
  ListItem, Avatar,
} from 'react-native-elements';
import SwipeList from '@/components/home/SwipeList';

const MainListView = (props) => {
  const { toDoList } = props;
  return (
    toDoList.map((item) => (
      <ScrollView>
        <ListItem
          bottomDivider
        >
          <Avatar source={{ uri: item.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{item.planName}</ListItem.Title>
            <ListItem.Subtitle>
              任务数:
              {' '}
              {item.taskAmount}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            size={30}
            name="angle-down"
            type="font-awesome"
          />
        </ListItem>
        <SwipeList taskList={item.taskList} />
      </ScrollView>
    )));
};

export default MainListView;
