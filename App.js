import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '@/store';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '@/navigations/BottomNavigator';
import { navigationRef } from '@/navigations/RootNavigator';
import Auth from '@/components/common/Auth';
import Initialization from '@/components/common/Initialization';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Auth />
    <Initialization />
    <NavigationContainer ref={navigationRef}>
      <BottomNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
