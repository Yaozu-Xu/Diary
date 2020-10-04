import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ListItem, Avatar,
} from 'react-native-elements';
import SwipeList from '@/components/home/SwipeList';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  subTitle: {
    paddingTop: 4,
  },
});

const MainListView = (props) => {
  const { toDoList } = props;
  const dispatch = useDispatch();
  return (
    toDoList.map((item, index) => (
      <>
        <ListItem
          bottomDivider
        >
          <Avatar
            rounded
            source={{ uri: item.avatar_url }}
            size="medium"
          />
          <ListItem.Content>
            <ListItem.Title>{item.planName}</ListItem.Title>
            <ListItem.Subtitle style={styles.subTitle}>
              任务数:
              {' '}
              {item.taskAmount}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            size={30}
            name="angle-down"
            type="font-awesome"
            onPress={() => {
              dispatch({ type: 'SET_TOOGLE' });
            }}
          />
        </ListItem>
        <SwipeList taskList={item.taskList} toggle={item.toggle} />
      </>
    )));
};

export default MainListView;
