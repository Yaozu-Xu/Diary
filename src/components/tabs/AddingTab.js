import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImage from '@/assets/image/greyBackground.jpeg';

const styles = StyleSheet.create({
  wrapper: {
    width: 32,
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

const AddingTab = () => {
  const dispatch = useDispatch();
  return (
    <ImageBackground source={backgroundImage} style={styles.wrapper}>
      <Icon
        name="plus"
        style={styles.plusIcon}
        backgroundColor="#fff"
        onPress={() => dispatch({ type: 'PLAN_TOOGLE' })}
      />
    </ImageBackground>
  );
};

export default AddingTab;
