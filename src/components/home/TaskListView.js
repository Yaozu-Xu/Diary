import React from 'react';
import {
  ListItem, Text, Tooltip,
} from 'react-native-elements';
import PropTypes from 'prop-types';

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
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title>{rowData.item.scheduledTime}</ListItem.Title>
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
