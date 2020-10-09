import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanScreen from '@/screens/Plans';
import RecordScreen from '@/screens/Records';
import HodiernalTab from '@/components/tabs/HodiernalTab';
import RecordsTab from '@/components/tabs/RecordsTab';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Plans"
      component={PlanScreen}
      options={{ tabBarIcon: () => <HodiernalTab /> }}
    />
    <Tab.Screen
      name="Records"
      component={RecordScreen}
      options={{ tabBarIcon: () => <RecordsTab /> }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
