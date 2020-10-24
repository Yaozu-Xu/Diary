/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-native';

const UserScreen = ({ navigation }) => (
  <>
    <Button
      title="Go to Signin"
      onPress={() => navigation.navigate('SignIn')}
    />
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
