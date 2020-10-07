import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '@/navigations/BottomNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '@/store';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
