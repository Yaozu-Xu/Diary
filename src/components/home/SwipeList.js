import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import TaskListView from './TaskListView';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  settingBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  settingBtnFinished: {
    backgroundColor: '#79f479',
    right: 0,
  },
  settingBtnFinishedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

function renderHiddenItem() {
  return (
    <View style={[styles.settingBtn, styles.settingBtnFinished]}>
      <Text style={styles.settingBtnFinishedText}>已完成</Text>
    </View>
  );
}

const SwipperList = () => {
  const taskList = useSelector((state) => state.task.details);
  return (
    <SwipeListView
      keyExtractor={(item, index) => index.toString()}
      useFlatList
      data={taskList}
      disableRightSwipe
      renderItem={(rowData) => <TaskListView details={rowData.item} />}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};
export default SwipperList;
