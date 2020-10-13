import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const UserScreen = ({ navigation }) => (
  <>
    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('LogIn')}
    />
    <Button
      title="Go to Signin"
      onPress={() => navigation.navigate('SignIn')}
    />
  </>
);

export default UserScreen;
