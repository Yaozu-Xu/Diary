import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from '@/navigations/Navigator';

const App = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default App;
