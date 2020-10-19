import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Overlay, Input } from 'react-native-elements';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
    width,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    borderColor: '#fff',
    backgroundColor: '#e4e3e3',
  },
  inputText: {
    marginLeft: 10,
  },
});

const NewPlanOverlay = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.display.newPlanToggle);
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={() => dispatch({ type: 'PLAN_TOOGLE' })}
    >
      <Input
        placeholder="Task name"
        inputStyle={styles.inputText}
        containerStyle={styles.inputWrapper}
        inputContainerStyle={styles.inputContainer}
      />
    </Overlay>
  );
};

export default NewPlanOverlay;
