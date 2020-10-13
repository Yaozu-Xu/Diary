import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@/screens/SignIn';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
