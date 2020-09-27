import React from 'react';
import { Header } from 'react-native-elements';

const App = () => (
  <Header
    placement="left"
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'add', color: '#fff' }}
  />
);

export default App;
