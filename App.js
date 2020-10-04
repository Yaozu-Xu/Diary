import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from '@/navigations/Navigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '@/store';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
