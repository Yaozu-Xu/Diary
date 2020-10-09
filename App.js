import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '@/navigations/BottomNavigator';
import { navigationRef } from '@/navigations/RootNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '@/store';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <BottomNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
