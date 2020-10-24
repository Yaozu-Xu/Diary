import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanScreen from '@/screens/Plans';
import RecordScreen from '@/screens/Records';
import UserScreen from '@/screens/User/Index';
import HodiernalTab from '@/components/tabs/HodiernalTab';
import RecordsTab from '@/components/tabs/RecordsTab';
import LoginTab from '@/components/tabs/LoginTab';
import { getTimeStamp } from '@/utils/timer';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Plans"
      component={PlanScreen}
      initialParams={{
        date: getTimeStamp().format,
      }}
      options={{ tabBarIcon: () => <HodiernalTab /> }}
    />
    <Tab.Screen
      name="Records"
      component={RecordScreen}
      options={{ tabBarIcon: () => <RecordsTab /> }}
    />
    <Tab.Screen
      name="User"
      component={UserScreen}
      options={{ tabBarIcon: () => <LoginTab /> }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
