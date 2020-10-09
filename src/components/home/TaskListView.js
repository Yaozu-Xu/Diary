import React from 'react';
import {
  ListItem, Text, Tooltip,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseStyle from '@/assets/style/base';

const styles = StyleSheet.create({
  clockIcon: {
    fontSize: 20,
  },
  listText: {
    paddingLeft: 20,
    textAlign: 'center',
  },
});

const TaskListView = (props) => {
  const { rowData } = props;
  return (
    <Tooltip
      popover={<Text>设置提醒</Text>}
      withOverlay={false}
      width={80}
      toggleAction="onLongPress"
    >
      <ListItem
        style={BaseStyle.shadow}
      >
        <ListItem.Content>
          <ListItem.Title>
            <Icon name="clock-o" style={styles.clockIcon} />
            <Text style={styles.listText}>
              {'   '}
              {rowData.item.scheduledTime}
            </Text>
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title>{rowData.item.taskName}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          name="bell"
          color="#f884a7"
          type="font-awesome"
        />
      </ListItem>
    </Tooltip>
  );
};

TaskListView.propTypes = {
  // eslint-disable-next-line react/require-default-props
  rowData: PropTypes.shape({
    item: PropTypes.shape({
      taskName: PropTypes.string,
      status: PropTypes.bool,
      scheduledTime: PropTypes.string,
    }),
  }),
};

export default TaskListView;
