import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { SwipeListView } from 'react-native-swipe-list-view';
import planCollection from '@/requester/Plans';
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

const SwipperListView = (props) => {
  const { info } = props;
  const { uid, pid } = info;
  const taskList = useSelector((state) => state.task.details).sort(
    (a, b) => a.date.toDate() < b.date.toDate(),
  );

  function onFinishPressed(task) {
    planCollection.tasksDocumentRemover(uid, pid, task, () => {
      alert('remove success');
    });
  }

  function renderHiddenItem(rowData) {
    const task = rowData.item;
    return (
      <View style={[styles.settingBtn, styles.settingBtnFinished]}>
        <Text
          style={styles.settingBtnFinishedText}
          onPress={() => { onFinishPressed(task); }}
        >
          已完成
        </Text>
      </View>
    );
  }
  return (
    <SwipeListView
      keyExtractor={(item, index) => index.toString()}
      useFlatList
      data={taskList}
      disableRightSwipe
      renderItem={(rowData) => <TaskListView details={rowData.item} />}
      renderHiddenItem={(rowData) => renderHiddenItem(rowData)}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

SwipperListView.propTypes = {
  info: PropTypes.shape({
    uid: PropTypes.string,
    pid: PropTypes.string,
  }),
};

SwipperListView.propTypes = {
  // eslint-disable-next-line react/require-default-props
  info: PropTypes.shape({
    uid: '',
    pid: '',
  }),
};

export default SwipperListView;
