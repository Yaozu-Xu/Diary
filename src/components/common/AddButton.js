import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImage from '@/assets/image/greyBackground.jpeg';
import TriangleBottom from './TriangleBottom';

const styles = StyleSheet.create({
  wrapper: {
    width: 36,
    height: 32,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  plusIcon: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
});

const AddButton = () => (
  <ImageBackground source={backgroundImage} style={styles.wrapper}>
    <Icon
      name="plus"
      style={styles.plusIcon}
      backgroundColor="#fff"
    />
    <TriangleBottom />
    <TriangleBottom left={6} />
    <TriangleBottom left={12} />
    <TriangleBottom left={18} />
    <TriangleBottom left={24} />
  </ImageBackground>
);

export default AddButton;
