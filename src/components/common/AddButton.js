import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImage from '@/assets/image/greyBackground.jpeg';

const styles = StyleSheet.create({
  wrapper: {
    width: 36,
    height: 36,
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
  </ImageBackground>
);

export default AddButton;
