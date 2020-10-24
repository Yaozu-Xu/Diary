import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import PropTypes from 'prop-types';
import Theme from '@/assets/style/variables';
import BaseStyle from '@/assets/style/base';
import * as RootNavigation from '@/navigations/RootNavigator';

LocaleConfig.locales.ir = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['Jan', 'Feb.', 'May', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'ir';

const styles = StyleSheet.create({
  calendar: {
    marginTop: 150,
    height: 350,
  },
});

const MyCalendar = (props) => {
  const { settings } = props;
  return (
    <Calendar
      style={[styles.calendar, BaseStyle.shadow]}
      onDayPress={(calendar) => {
        RootNavigation.navigate('Plans', { date: calendar.dateString });
      }}
      maxDate={settings.maxDate}
      theme={{
        backgroundColor: '#fff',
        calendarBackground: '#fff',
        textSectionTitleColor: '#c5cfd9',
        textSectionTitleDisabledColor: Theme.disabled,
        selectedDayBackgroundColor: Theme.lightBlue,
        selectedDayTextColor: '#fff',
        todayTextColor: Theme.lightBlue,
        dayTextColor: Theme.inkBlue,
        textDisabledColor: Theme.disabled,
        dotColor: Theme.lightBlue,
        selectedDotColor: '#fff',
        arrowColor: 'orange',
        disabledArrowColor: Theme.disabled,
        monthTextColor: Theme.inkBlue,
        indicatorColor: Theme.inkBlue,
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  );
};

MyCalendar.propTypes = {
  settings: PropTypes.shape({
    maxDate: PropTypes.string,
  }),
};

MyCalendar.defaultProps = {
  settings: PropTypes.shape({
    maxDate: '',
  }),
};

export default MyCalendar;
