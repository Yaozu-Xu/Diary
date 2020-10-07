import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/scenes/Home';
import DetailScreen from '@/scenes/Detail';
import HodiernalTab from '@/components/tabs/HodiernalTab';
import RecordsTab from '@/components/tabs/RecordsTab';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="今天"
      component={HomeScreen}
      options={{ tabBarIcon: () => <HodiernalTab /> }}
    />
    <Tab.Screen
      name="记录"
      component={DetailScreen}
      options={{ tabBarIcon: () => <RecordsTab /> }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
