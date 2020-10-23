import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet, View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Divider } from 'react-native-elements';
import { getTimeStamp } from '@/utils/timer';
import variables from '@/assets/style/variables';

const ROW_HEIGHT = 50;

const styles = StyleSheet.create({
  selectorContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: ROW_HEIGHT,
    marginLeft: 20,
    marginRight: 20,
  },
  divider: {
    backgroundColor: variables.lightGray,
    marginLeft: 25,
    marginRight: 25,
  },
  contentContainer: {
    padding: 0,
    height: ROW_HEIGHT,
    alignItems: 'center',
  },
  noPadding: {
    padding: 0,
  },
  title: {
    fontWeight: 'bold',
  },
});

const TimeSelector = (props) => {
  const { date } = props;
  const initialIndex = 0;
  const minutesList = [...Array(61).keys()];
  const hoursList = generateHourList();
  const dispatch = useDispatch();
  const [hourIndex, setHourIndex] = useState(0);
  const [minuteIndex, setMinuteIndex] = useState(0);
  const hoursListRef = useRef(null);
  const minutesListRef = useRef(null);

  /**
   * 根据日期参数生产小时列表
   */
  function generateHourList() {
    // 当前计划的日期是今天
    if (getTimeStamp().format === date) {
      return [...Array(25).keys()].filter(
        (hour) => hour >= new Date().getHours(),
      );
    }
    return [...Array(25).keys()];
  }

  /**
   * 生成时间选择器的文本
   * @param {number} hour
   */
  function generateTitle(hour) {
    let res;
    if (hour <= 12) {
      res = `上午 ${hour} 点`;
    } else if (hour <= 17) {
      res = `下午 ${hour - 12} 点`;
    } else {
      res = `晚上 ${hour - 12} 点`;
    }
    return res;
  }

  function scrollToIndex(ref, index) {
    ref.current.scrollToIndex({ animated: true, index });
  }

  function renderHoursView({ item }) {
    return (
      <ListItem containerStyle={styles.noPadding}>
        <ListItem.Content style={styles.contentContainer}>
          <ListItem.Title style={styles.title}>{generateTitle(item)}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  }

  function renderMinutesView({ item }) {
    return (
      <ListItem containerStyle={styles.noPadding}>
        <ListItem.Content style={styles.contentContainer}>
          <ListItem.Title style={styles.title}>
            {item}
            {' '}
            分
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  }

  function onHoursViewScroll({ nativeEvent }) {
    const offsetY = nativeEvent.contentOffset.y;
    const selectedIndex = offsetY <= 0 ? 0 : Math.round(offsetY / ROW_HEIGHT) + initialIndex;
    setHourIndex(Math.min(selectedIndex, hoursList.length - 1));
    dispatch({ type: 'SET_HOUR', payload: hoursList[hourIndex] });
  }

  function onMinutesViewScroll({ nativeEvent }) {
    const offsetY = nativeEvent.contentOffset.y;
    const selectedIndex = offsetY <= 0 ? 0 : Math.round(offsetY / ROW_HEIGHT) + initialIndex;
    setMinuteIndex(Math.min(selectedIndex, minutesList.length - 1));
    dispatch({ type: 'SET_MINUTE', payload: minutesList[minuteIndex] });
  }
  /**
   *  For init hour store
   */
  useEffect(() => {
    if (hourIndex === initialIndex && minuteIndex === initialIndex) {
      dispatch({ type: 'SET_HOUR', payload: hoursList[initialIndex] });
      dispatch({ type: 'SET_MINUTE', payload: minutesList[initialIndex] });
    }
  }, []);

  useEffect(() => {
    scrollToIndex(minutesListRef, minuteIndex);
  }, [minuteIndex]);

  useEffect(() => {
    scrollToIndex(hoursListRef, hourIndex);
  }, [hourIndex]);
  return (
    <>
      <Divider style={styles.divider} />
      <View style={styles.selectorContainer}>
        <FlatList
          data={hoursList}
          ref={hoursListRef}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderHoursView}
          getItemLayout={(data, index) => ({
            length: ROW_HEIGHT,
            offset: ROW_HEIGHT * index,
            index,
          })}
          onScroll={onHoursViewScroll}
        />
        <FlatList
          data={minutesList}
          ref={minutesListRef}
          renderItem={renderMinutesView}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={(data, index) => ({
            length: ROW_HEIGHT,
            offset: ROW_HEIGHT * index,
            index,
          })}
          onScroll={onMinutesViewScroll}
        />
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

TimeSelector.propTypes = {
  date: PropTypes.string,
};

TimeSelector.defaultProps = {
  date: PropTypes.string,
};

export default TimeSelector;
