import React from 'react';
import { Header } from 'react-native-elements';
import HeaderBackground from '@/assets/image/headerBackground.jpeg';
import AddingTab from '@/components/tabs/AddingTab';

const NavHeader = () => (
  <Header
    backgroundImage={HeaderBackground}
    placement="center"
    leftComponent={{
      icon: 'menu',
      color: '#fff',
      style: { fontWeight: 'bold' },
    }}
    centerComponent={{
      text: 'Trailing',
      style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    }}
    rightComponent={() => <AddingTab />}
  />
);

export default NavHeader;
