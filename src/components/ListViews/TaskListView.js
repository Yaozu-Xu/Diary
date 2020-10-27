/* eslint-disable react/prop-types */
import React from 'react';
import {
  ListItem, Text, Tooltip,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import BaseStyle from '@/assets/style/base';
import { getCurrentHour } from '@/utils/timer';

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
  const { details } = props;
  function renderDateTime(date) {
    if (date) {
      const { minutes, hours } = getCurrentHour(date.toDate());
      return `${hours}:${minutes}`;
    }
    return '';
  }
  return (
    details.date
      ? (
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
                  {renderDateTime(details.date)}
                </Text>
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Title>{details.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron
              name="bell"
              color={details.alram ? '#f884a7' : '#d5d1d3'}
              type="font-awesome"
            />
          </ListItem>
        </Tooltip>
      ) : (<></>)
  );
};

export default TaskListView;
