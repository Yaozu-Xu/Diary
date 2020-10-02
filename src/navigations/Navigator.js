import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/scenes/Home';
import DetailScreen from '@/scenes/Detail';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;
