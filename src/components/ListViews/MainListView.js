import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  ListItem, Avatar,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { getTimeStamp, isToday } from '@/utils/timer';

const styles = StyleSheet.create({
  subTitle: {
    paddingTop: 4,
  },
});

const MainListView = (props) => {
  const { plan } = props;
  const dispatch = useDispatch();
  const user = {
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  };

  function genDateTitle(seconds) {
    if (isToday(seconds)) {
      return '今日安排';
    }
    const timeStamp = getTimeStamp(seconds);
    return `${timeStamp.month}月${timeStamp.day}日`;
  }
  return plan.map((item) => (
    <ListItem
      bottomDivider
      key={item.pid}
    >
      <Avatar
        rounded
        source={{ uri: user.avatar_url }}
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title>
          {genDateTitle(item.date.toDate())}
        </ListItem.Title>
        <ListItem.Subtitle
          style={styles.subTitle}
        >
          任务数:
          {' '}
          9
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
  ));
};

MainListView.propTypes = {
  plan: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.shape(),
    pid: PropTypes.string,
  })),
};

MainListView.defaultProps = {
  plan: PropTypes.arrayOf(PropTypes.shape({
    date: {},
    pid: '',
  })),
};
export default MainListView;
