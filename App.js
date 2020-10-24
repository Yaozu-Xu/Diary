import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '@/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@/navigations/StackNavigator';
import { navigationRef } from '@/navigations/RootNavigator';
import Auth from '@/components/common/Auth';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Auth />
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
