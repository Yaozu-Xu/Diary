import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/screens/User/Login';
import IndexScreen from '@/screens/User/Index';
import SignInScreen from '@/screens/User/SignIn';

const Stack = createStackNavigator();

const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={IndexScreen}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
    />
    <Stack.Screen
      name="LogIn"
      component={LoginScreen}
    />
  </Stack.Navigator>
);

export default UserNavigator;
