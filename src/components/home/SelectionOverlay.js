import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    top: 160,
    right: 0,
    backgroundColor: '#f5f6fc',
  },
  selectionText: {
    textAlign: 'center',
    color: '#bfc0c9',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  selectionTextSelected: {
    color: '#9299d4',
  },
  hidden: {
    display: 'none',
  },
});

const SelectionOverlay = () => {
  const dispatch = useDispatch();
  const currentSelected = useSelector((state) => state.display.currentSelection);
  const toggle = useSelector((state) => state.display.toggle);
  const toggleStyle = { display: toggle ? 'flex' : 'none' };

  function onTextpressed(payload) {
    dispatch({ type: 'SET_SELECTION', payload });
  }

  return (
    <View style={[styles.overlay, styles.shadow]}>
      <Text
        style={[styles.selectionText,
          currentSelected === 0 ? styles.selectionTextSelected : '',
          toggleStyle,
        ]}
        onPress={() => onTextpressed(0)}
      >
        全部
      </Text>
      <Text
        style={[styles.selectionText,
          currentSelected === 1 ? styles.selectionTextSelected : '',
          toggleStyle]}
        onPress={() => onTextpressed(1)}
      >
        未完成
      </Text>
      <Text
        style={[styles.selectionText,
          currentSelected === 2 ? styles.selectionTextSelected : '',
          toggleStyle]}
        onPress={() => onTextpressed(2)}
      >
        已完成
      </Text>
    </View>
  );
};

export default SelectionOverlay;
