import React from 'react';
import { Header } from 'react-native-elements';
import HeaderBackground from '@/assets/image/headerBackground.jpeg';

const NavHeader = () => (
  <Header
    backgroundImage={HeaderBackground}
    placement="center"
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'add', color: '#fff' }}
  />
);

export default NavHeader;
