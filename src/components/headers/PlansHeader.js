import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { getTimeStamp } from '@/utils/timer';
import variables from '@/assets/style/variables';

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    marginTop: 5,
    marginLeft: 8,
    marginBottom: 5,
  },
  titleContainer: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  subTitle: {
    color: variables.lightGray,
  },
  arrow: {
    marginRight: 14,
    display: 'flex',
  },
});

const PlansHeader = (props) => {
  const { date } = props;
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.details).filter((task) => task.date !== null);
  const user = {
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  };

  function genDateTitle() {
    const currentTime = getTimeStamp();
    if (currentTime.format === date) {
      return '今日安排';
    }
    const dateArr = date.split('-');
    return `${dateArr[1]}月${dateArr[2]}日`;
  }

  return (
    <View style={styles.conatiner}>
      <Avatar
        containerStyle={styles.avatar}
        rounded
        source={{ uri: user.avatar_url }}
        size="medium"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{genDateTitle()}</Text>
        <Text style={styles.subTitle}>
          任务数:
          {' '}
          {tasks.length}
        </Text>
      </View>
      <Icon
        size={30}
        containerStyle={styles.arrow}
        color={variables.lightGray}
        name="angle-down"
        type="font-awesome"
        onPress={() => {
          dispatch({ type: 'SET_TOOGLE' });
        }}
      />
    </View>

  );
};

PlansHeader.propTypes = {
  date: PropTypes.string,
};

PlansHeader.defaultProps = {
  date: PropTypes.string,
};
export default PlansHeader;
