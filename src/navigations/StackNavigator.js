import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/screens/User/Login';
import SignInScreen from '@/screens/User/SignIn';
import IndexNavigator from '@/navigations/IndexNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LogIn"
      component={LoginScreen}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Index"
      component={IndexNavigator}
    />
  </Stack.Navigator>
);

export default StackNavigator;
